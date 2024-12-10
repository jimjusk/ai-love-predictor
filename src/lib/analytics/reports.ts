import { TrendPoint, analyzeTrend } from './trends';
import { Alert } from './alerts';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export interface ReportOptions {
  title: string;
  period: 'day' | 'week' | 'month';
  metrics: string[];
  includeAlerts: boolean;
  includeCharts: boolean;
  format: 'pdf' | 'csv' | 'json';
}

export interface ReportData {
  metrics: Record<string, TrendPoint[]>;
  alerts: Alert[];
  trends: Record<string, ReturnType<typeof analyzeTrend>>;
}

export async function generateReport(
  data: ReportData,
  options: ReportOptions
): Promise<Blob> {
  switch (options.format) {
    case 'pdf':
      return generatePDFReport(data, options);
    case 'csv':
      return generateCSVReport(data, options);
    case 'json':
      return generateJSONReport(data, options);
    default:
      throw new Error(`Unsupported format: ${options.format}`);
  }
}

async function generatePDFReport(
  data: ReportData,
  options: ReportOptions
): Promise<Blob> {
  const doc = new jsPDF();
  
  // 添加标题
  doc.setFontSize(20);
  doc.text(options.title, 20, 20);
  
  // 添加生成时间
  doc.setFontSize(12);
  doc.text(`生成时间: ${new Date().toLocaleString()}`, 20, 30);

  let yOffset = 40;

  // 添加指标摘要
  if (options.metrics.length > 0) {
    doc.setFontSize(16);
    doc.text('指标摘要', 20, yOffset);
    yOffset += 10;

    const metricsData = options.metrics.map(metric => {
      const trend = data.trends[metric];
      return [
        metric,
        trend.trend,
        `${(trend.confidence * 100).toFixed(1)}%`,
        trend.anomaly ? '是' : '否',
      ];
    });

    doc.autoTable({
      startY: yOffset,
      head: [['指标', '趋势', '置信度', '异常']],
      body: metricsData,
    });

    yOffset = (doc as any).lastAutoTable.finalY + 10;
  }

  // 添加告警信息
  if (options.includeAlerts && data.alerts.length > 0) {
    doc.addPage();
    doc.setFontSize(16);
    doc.text('告警记录', 20, 20);

    const alertsData = data.alerts.map(alert => [
      new Date(alert.timestamp).toLocaleString(),
      alert.severity,
      alert.metric,
      alert.message,
    ]);

    doc.autoTable({
      startY: 30,
      head: [['时间', '级别', '指标', '描述']],
      body: alertsData,
    });
  }

  return doc.output('blob');
}

function generateCSVReport(
  data: ReportData,
  options: ReportOptions
): Promise<Blob> {
  let csv = 'timestamp,metric,value\n';

  for (const metric of options.metrics) {
    const points = data.metrics[metric];
    if (points) {
      csv += points
        .map(p => `${new Date(p.timestamp).toISOString()},${metric},${p.value}`)
        .join('\n');
      csv += '\n';
    }
  }

  return Promise.resolve(new Blob([csv], { type: 'text/csv' }));
}

function generateJSONReport(
  data: ReportData,
  options: ReportOptions
): Promise<Blob> {
  const report = {
    title: options.title,
    generatedAt: new Date().toISOString(),
    period: options.period,
    metrics: Object.fromEntries(
      options.metrics.map(metric => [
        metric,
        {
          data: data.metrics[metric],
          trend: data.trends[metric],
        },
      ])
    ),
    alerts: options.includeAlerts ? data.alerts : undefined,
  };

  return Promise.resolve(
    new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
  );
} 