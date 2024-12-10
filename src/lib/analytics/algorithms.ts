export function linearRegression(
  x: number[],
  y: number[]
): { slope: number; intercept: number; rSquared: number } {
  const n = x.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;
  let sumYY = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumXX += x[i] * x[i];
    sumYY += y[i] * y[i];
  }

  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  // 计算R方
  const yMean = sumY / n;
  const totalSS = sumYY - n * yMean * yMean;
  const residualSS = y.reduce((sum, yi, i) => {
    const prediction = slope * x[i] + intercept;
    return sum + Math.pow(yi - prediction, 2);
  }, 0);
  const rSquared = 1 - residualSS / totalSS;

  return { slope, intercept, rSquared };
}

export function exponentialSmoothing(
  data: number[],
  alpha: number
): number[] {
  const smoothed = [data[0]];
  
  for (let i = 1; i < data.length; i++) {
    smoothed.push(alpha * data[i] + (1 - alpha) * smoothed[i - 1]);
  }

  return smoothed;
}

export function movingAverage(
  data: number[],
  window: number
): number[] {
  const result = [];
  
  for (let i = window - 1; i < data.length; i++) {
    const windowSlice = data.slice(i - window + 1, i + 1);
    const average = windowSlice.reduce((a, b) => a + b, 0) / window;
    result.push(average);
  }

  return result;
}

export function calculatePercentileRank(
  value: number,
  data: number[]
): number {
  const sorted = [...data].sort((a, b) => a - b);
  const index = sorted.findIndex(x => x >= value);
  return (index / sorted.length) * 100;
} 