import { TrendPoint, analyzeTrend, detectAnomalies } from './trends';

export interface AlertRule {
  id: string;
  name: string;
  metric: string;
  condition: AlertCondition;
  threshold: number;
  duration: number;  // 持续时间(分钟)
  severity: 'critical' | 'warning' | 'info';
  enabled: boolean;
}

export interface AlertCondition {
  type: 'threshold' | 'trend' | 'anomaly';
  operator: '>' | '<' | '==' | '>=' | '<=' | 'change';
  compareWith?: 'value' | 'mean' | 'median' | 'percentile';
  percentile?: number;
}

export interface Alert {
  id: string;
  ruleId: string;
  metric: string;
  value: number;
  threshold: number;
  timestamp: number;
  severity: 'critical' | 'warning' | 'info';
  message: string;
}

export class AlertEngine {
  private rules: AlertRule[] = [];
  private alerts: Alert[] = [];
  private lastCheck: Record<string, number> = {};

  constructor(rules: AlertRule[]) {
    this.rules = rules;
  }

  public async evaluateMetrics(metrics: Record<string, TrendPoint[]>): Promise<Alert[]> {
    const newAlerts: Alert[] = [];

    for (const rule of this.rules.filter(r => r.enabled)) {
      const metricData = metrics[rule.metric];
      if (!metricData?.length) continue;

      const lastValue = metricData[metricData.length - 1].value;
      const lastTimestamp = metricData[metricData.length - 1].timestamp;

      // 检查是否需要评估（避免过于频繁）
      if (
        this.lastCheck[rule.metric] &&
        lastTimestamp - this.lastCheck[rule.metric] < rule.duration * 60 * 1000
      ) {
        continue;
      }

      let shouldAlert = false;
      let alertMessage = '';

      switch (rule.condition.type) {
        case 'threshold':
          shouldAlert = this.evaluateThreshold(lastValue, rule);
          alertMessage = `${rule.metric} ${rule.condition.operator} ${rule.threshold}`;
          break;

        case 'trend':
          const trend = analyzeTrend(metricData);
          shouldAlert = trend.trend !== 'stable' && Math.abs(trend.prediction - lastValue) > rule.threshold;
          alertMessage = `${rule.metric} 趋势异常: ${trend.trend}`;
          break;

        case 'anomaly':
          const anomalies = detectAnomalies(metricData);
          shouldAlert = anomalies.some(a => a.timestamp === lastTimestamp);
          alertMessage = `${rule.metric} 出现异常值`;
          break;
      }

      if (shouldAlert) {
        const alert: Alert = {
          id: `${rule.id}-${Date.now()}`,
          ruleId: rule.id,
          metric: rule.metric,
          value: lastValue,
          threshold: rule.threshold,
          timestamp: lastTimestamp,
          severity: rule.severity,
          message: alertMessage,
        };

        newAlerts.push(alert);
        this.alerts.push(alert);
      }

      this.lastCheck[rule.metric] = lastTimestamp;
    }

    // 清理旧告警
    this.cleanupOldAlerts();

    return newAlerts;
  }

  private evaluateThreshold(value: number, rule: AlertRule): boolean {
    switch (rule.condition.operator) {
      case '>': return value > rule.threshold;
      case '<': return value < rule.threshold;
      case '==': return value === rule.threshold;
      case '>=': return value >= rule.threshold;
      case '<=': return value <= rule.threshold;
      default: return false;
    }
  }

  private cleanupOldAlerts(maxAge = 24 * 60 * 60 * 1000) { // 默认保留24小时
    const now = Date.now();
    this.alerts = this.alerts.filter(alert => 
      now - alert.timestamp < maxAge
    );
  }

  public getActiveAlerts(): Alert[] {
    return this.alerts;
  }
} 