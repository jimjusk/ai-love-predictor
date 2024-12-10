'use client';

import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MetricsData {
  timestamp: string;
  errorRate: number;
  latency: number;
  cpuUsage: number;
  userMetrics: {
    activeUsers: number;
    conversionRate: number;
    bounceRate: number;
  };
}

export default function MonitoringDashboard() {
  const [metrics, setMetrics] = useState<MetricsData[]>([]);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000); // 每分钟更新
    return () => clearInterval(interval);
  }, [timeRange]);

  async function fetchMetrics() {
    try {
      const response = await fetch(`/api/metrics?range=${timeRange}`);
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    }
  }

  const errorRateData = {
    labels: metrics.map(m => new Date(m.timestamp).toLocaleTimeString()),
    datasets: [{
      label: '错误率',
      data: metrics.map(m => m.errorRate * 100),
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    }],
  };

  const performanceData = {
    labels: metrics.map(m => new Date(m.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: '响应时间 (ms)',
        data: metrics.map(m => m.latency),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'CPU使用率 (%)',
        data: metrics.map(m => m.cpuUsage),
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1,
      },
    ],
  };

  const userMetricsData = {
    labels: metrics.map(m => new Date(m.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: '活跃用户',
        data: metrics.map(m => m.userMetrics.activeUsers),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: '转化率 (%)',
        data: metrics.map(m => m.userMetrics.conversionRate * 100),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">监控面板</h2>
        <div className="space-x-2">
          {(['24h', '7d', '30d'] as const).map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded ${
                timeRange === range
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-card rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">错误率趋势</h3>
          <Line data={errorRateData} />
        </div>

        <div className="p-4 bg-card rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">性能指标</h3>
          <Line data={performanceData} />
        </div>

        <div className="p-4 bg-card rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">用户指标</h3>
          <Bar data={userMetricsData} />
        </div>

        <div className="p-4 bg-card rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">实时告警</h3>
          <AlertsList />
        </div>
      </div>
    </div>
  );
} 