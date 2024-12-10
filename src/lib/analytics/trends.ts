import { exponentialSmoothing, linearRegression } from './algorithms';

export interface TrendPoint {
  timestamp: number;
  value: number;
}

export interface TrendAnalysis {
  trend: 'up' | 'down' | 'stable';
  confidence: number;
  prediction: number;
  anomaly: boolean;
}

export function analyzeTrend(data: TrendPoint[], window = 24): TrendAnalysis {
  if (data.length < window) {
    return {
      trend: 'stable',
      confidence: 0,
      prediction: 0,
      anomaly: false,
    };
  }

  const recentData = data.slice(-window);
  const values = recentData.map(d => d.value);
  
  // 计算趋势
  const { slope, rSquared } = linearRegression(
    recentData.map((_, i) => i),
    values
  );

  // 使用指数平滑进行预测
  const smoothed = exponentialSmoothing(values, 0.3);
  const prediction = smoothed[smoothed.length - 1];

  // 检测异常
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const stdDev = Math.sqrt(
    values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length
  );
  const lastValue = values[values.length - 1];
  const anomaly = Math.abs(lastValue - mean) > stdDev * 2;

  return {
    trend: slope > 0.1 ? 'up' : slope < -0.1 ? 'down' : 'stable',
    confidence: rSquared,
    prediction,
    anomaly,
  };
}

export function detectAnomalies(
  data: TrendPoint[],
  sensitivity = 2
): TrendPoint[] {
  const values = data.map(d => d.value);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const stdDev = Math.sqrt(
    values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length
  );

  return data.filter(point => 
    Math.abs(point.value - mean) > stdDev * sensitivity
  );
}

export function forecastMetrics(
  data: TrendPoint[],
  horizon = 24
): TrendPoint[] {
  const values = data.map(d => d.value);
  const timestamps = data.map(d => d.timestamp);
  const interval = timestamps[1] - timestamps[0];

  // 使用指数平滑进行预测
  const smoothed = exponentialSmoothing(values, 0.3);
  const lastTimestamp = timestamps[timestamps.length - 1];

  return Array.from({ length: horizon }, (_, i) => ({
    timestamp: lastTimestamp + interval * (i + 1),
    value: smoothed[smoothed.length - 1],
  }));
} 