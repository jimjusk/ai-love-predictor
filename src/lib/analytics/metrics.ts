// 定义指标数据类型
export interface MetricsData {
  timestamp: string;
  value: number;
  category: string;
  label: string;
}

// 获取指标数据的函数
export async function getMetricsData(
  startDate: Date,
  endDate: Date
): Promise<MetricsData[]> {
  try {
    return [
      {
        timestamp: new Date().toISOString(),
        value: Math.random() * 100,
        category: 'performance',
        label: '系统性能'
      }
    ];
  } catch (error) {
    console.error('获取指标数据失败:', error);
    return [];
  }
}

// 获取特定类别的指标数据
export async function getCategoryMetrics(
  category: string,
  startDate: Date,
  endDate: Date
): Promise<MetricsData[]> {
  const allMetrics = await getMetricsData(startDate, endDate);
  return allMetrics.filter(metric => metric.category === category);
}

// 计算指标平均值
export function calculateMetricsAverage(metrics: MetricsData[]): number {
  if (metrics.length === 0) return 0;
  const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
  return sum / metrics.length;
} 