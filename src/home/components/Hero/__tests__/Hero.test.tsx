import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../index';

describe('Hero 组件', () => {
  it('应该正确渲染标题和副标题', () => {
    render(<Hero />);
    
    expect(screen.getByText(/AI智能预测你的理想伴侣/i)).toBeInTheDocument();
    expect(screen.getByText(/基于深度学习算法/i)).toBeInTheDocument();
  });

  it('应该包含开始测评按钮', () => {
    render(<Hero />);
    
    const button = screen.getByRole('link', { name: /开始测评/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/assessment');
  });
}); 