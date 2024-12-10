'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { analyzeTrend, forecastMetrics, type TrendPoint } from '@/lib/analytics/trends';

interface TrendAnalysisProps {
  data: TrendPoint[];
  title: string;
  metric: string;
}

export default function TrendAnalysis({
  data,
  title,
  metric,
}: TrendAnalysisProps) {
  const analysis = analyzeTrend(data);
  const forecast = forecastMetrics(data);

  const chartData = {
    labels: [
      ...data.map(d => new Date(d.timestamp).toLocaleTimeString()),
      ...forecast.map(d => new Date(d.timestamp).toLocaleTimeString()),
    ],
    datasets: [
      {
        label: '历史数据',
        data: data.map(d => d.value),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: '预测',
        data: [...Array(data.length).fill(null), ...forecast.map(d => d.value)],
        borderColor: 'rgb(153, 102, 255)',
        borderDash: [5, 5],
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4 bg-card rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 rounded text-sm ${
              analysis.trend === 'up'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                : analysis.trend === 'down'
                ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
            }`}
          >
            {analysis.trend === 'up' ? '上升' : analysis.trend === 'down' ? '下降' : '稳定'}
          </span>
          <span className="text-sm text-muted-foreground">
            置信度: {(analysis.confidence * 100).toFixed(1)}%
          </span>
        </div>
      </div>

      <Line data={chartData} />

      {analysis.anomaly && (
        <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 rounded">
          <p className="text-sm text-red-800 dark:text-red-300">
            ⚠️ 检测到异常: {metric}指标出现异常波动
          </p>
        </div>
      )}
    </div>
  );
} 