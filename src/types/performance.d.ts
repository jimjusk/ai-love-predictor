declare interface PerformanceObserverEntry {
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
}

declare interface LayoutShiftEntry extends PerformanceObserverEntry {
  hadRecentInput: boolean;
  value: number;
}

declare interface FirstInputEntry extends PerformanceObserverEntry {
  processingStart: number;
}

declare interface NavigationEntry extends PerformanceObserverEntry {
  responseStart: number;
} 