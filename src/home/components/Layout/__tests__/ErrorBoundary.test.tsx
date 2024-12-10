import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

const ErrorComponent = () => {
  throw new Error('测试错误');
};

describe('ErrorBoundary 组件', () => {
  beforeEach(() => {
    // 禁用 console.error 以避免测试输出中的错误日志
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('应该捕获错误并显示错误UI', () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('抱歉，出现了一些问题')).toBeInTheDocument();
    expect(screen.getByText('我们正在努力修复这个问题，请稍后再试。')).toBeInTheDocument();
  });

  it('点击重试按钮应该重置错误状态', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <div>正常内容</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('正常内容')).toBeInTheDocument();

    rerender(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    const retryButton = screen.getByText('重试');
    fireEvent.click(retryButton);

    expect(screen.queryByText('抱歉，出现了一些问题')).not.toBeInTheDocument();
  });
}); 