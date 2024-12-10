import React, { Component, ErrorInfo, ReactNode } from 'react';
import { captureError } from '@/lib/sentry';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    captureError(error, {
      componentStack: errorInfo.componentStack,
      ...this.getErrorContext(),
    });
  }

  private getErrorContext() {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">抱歉，出现了一些问题</h2>
            <p className="text-muted-foreground mb-6">
              我们正在努力修复这个问题，请稍后再试。
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                重试
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
              >
                刷新页面
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 