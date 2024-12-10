import cron from 'node-cron';
import { getMetricsData } from '../analytics/metrics';

// 简化的报告配置接口
interface ScheduledReport {
  id: string;
  schedule: string;  // cron表达式
  period: 'day' | 'week' | 'month';
  metrics: string[];  // 指标列表
}

export class ReportScheduler {
  private jobs: Map<string, cron.ScheduledTask> = new Map();

  constructor() {}

  private getDateRange(period: 'day' | 'week' | 'month'): { startDate: Date; endDate: Date } {
    const endDate = new Date();
    const startDate = new Date();

    switch (period) {
      case 'day':
        startDate.setDate(endDate.getDate() - 1);
        break;
      case 'week':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case 'month':
        startDate.setMonth(endDate.getMonth() - 1);
        break;
    }

    return { startDate, endDate };
  }

  private async generateReport(report: ScheduledReport) {
    try {
      const { startDate, endDate } = this.getDateRange(report.period);
      const metricsData = await getMetricsData(startDate, endDate);
      
      // 简单地记录数据，而不是生成报告
      console.log('Report generated:', {
        id: report.id,
        period: report.period,
        metrics: metricsData
      });
    } catch (error) {
      console.error('Report generation failed:', error);
    }
  }

  // 添加定时任务
  public scheduleReport(report: ScheduledReport): void {
    if (this.jobs.has(report.id)) {
      throw new Error(`Report ${report.id} already scheduled`);
    }

    const job = cron.schedule(report.schedule, () => {
      this.generateReport(report).catch(error => {
        console.error(`Report ${report.id} failed:`, error);
      });
    });

    this.jobs.set(report.id, job);
  }

  // 取消定时任务
  public cancelReport(reportId: string): void {
    const job = this.jobs.get(reportId);
    if (job) {
      job.stop();
      this.jobs.delete(reportId);
    }
  }

  // 停止所有任务
  public stopAll(): void {
    this.jobs.forEach(job => job.stop());
    this.jobs.clear();
  }
} 