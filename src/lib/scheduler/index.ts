import cron from 'node-cron';
import { generateReport, ReportOptions } from '../analytics/reports';
import { sendReportEmail } from './mailer';
import { AlertEngine } from '../analytics/alerts';
import { getMetricsData } from '../analytics/metrics';

interface ScheduledReport extends ReportOptions {
  schedule: string;  // cron表达式
  recipients: string[];
}

interface SchedulerConfig {
  reports: ScheduledReport[];
  alertEngine: AlertEngine;
}

export class Scheduler {
  private tasks: cron.ScheduledTask[] = [];
  private config: SchedulerConfig;

  constructor(config: SchedulerConfig) {
    this.config = config;
  }

  public start() {
    // 设置定时报告任务
    this.config.reports.forEach(report => {
      const task = cron.schedule(report.schedule, () => {
        this.generateAndSendReport(report);
      });
      this.tasks.push(task);
    });

    // 设置指标监控任务
    const monitoringTask = cron.schedule('*/5 * * * *', () => {
      this.checkMetrics();
    });
    this.tasks.push(monitoringTask);
  }

  public stop() {
    this.tasks.forEach(task => task.stop());
    this.tasks = [];
  }

  private async generateAndSendReport(report: ScheduledReport) {
    try {
      const metricsData = await getMetricsData(report.metrics, report.period);
      const alerts = this.config.alertEngine.getActiveAlerts();
      
      const reportData = {
        metrics: metricsData,
        alerts,
        trends: Object.fromEntries(
          Object.entries(metricsData).map(([metric, data]) => [
            metric,
            analyzeTrend(data),
          ])
        ),
      };

      const blob = await generateReport(reportData, report);
      
      // 发送报告邮件
      await Promise.all(
        report.recipients.map(recipient =>
          sendReportEmail({
            to: recipient,
            subject: `${report.title} - ${new Date().toLocaleDateString()}`,
            report: blob,
            format: report.format,
          })
        )
      );

      console.log(`Report sent successfully: ${report.title}`);
    } catch (error) {
      console.error(`Failed to generate/send report: ${report.title}`, error);
    }
  }

  private async checkMetrics() {
    try {
      const metrics = await getMetricsData(
        this.config.reports.flatMap(r => r.metrics),
        'hour'
      );
      await this.config.alertEngine.evaluateMetrics(metrics);
    } catch (error) {
      console.error('Failed to check metrics:', error);
    }
  }
} 