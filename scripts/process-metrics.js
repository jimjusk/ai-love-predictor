const fs = require('fs');
const path = require('path');

async function processMetrics() {
  const errorRate = await getErrorRate();
  const latency = await getLatency();
  const cpuUsage = await getCPUUsage();
  const userMetrics = await getUserMetrics();

  const alerts = [];

  // 检查错误率
  if (errorRate > process.env.ALERT_THRESHOLD_ERROR_RATE) {
    alerts.push(`🚨 错误率过高: ${(errorRate * 100).toFixed(2)}%`);
  }

  // 检查延迟
  if (latency > process.env.ALERT_THRESHOLD_LATENCY) {
    alerts.push(`⚠️ 响应时间过长: ${latency}ms`);
  }

  // 检查CPU使用率
  if (cpuUsage > process.env.ALERT_THRESHOLD_CPU) {
    alerts.push(`🔥 CPU使用率过高: ${cpuUsage}%`);
  }

  // 检查用户指标
  if (userMetrics.bounceRate > 0.5) {
    alerts.push(`📉 跳出率过高: ${(userMetrics.bounceRate * 100).toFixed(2)}%`);
  }

  // 发送告警
  if (alerts.length > 0) {
    await sendSlackAlert(alerts.join('\n'));
  }

  // 保存指标历史
  saveMetricsHistory({
    timestamp: new Date().toISOString(),
    errorRate,
    latency,
    cpuUsage,
    userMetrics,
  });
}

async function sendSlackAlert(message) {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return;

  await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: message,
      username: 'Monitoring Bot',
      icon_emoji: ':robot_face:',
    }),
  });
}

function saveMetricsHistory(metrics) {
  const historyFile = path.join(__dirname, '../data/metrics-history.json');
  let history = [];

  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
  }

  history.push(metrics);

  // 只保留最近30天的数据
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  history = history.filter(m => new Date(m.timestamp) > thirtyDaysAgo);

  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
}

processMetrics().catch(console.error); 