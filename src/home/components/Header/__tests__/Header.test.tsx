import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../index';

describe('Header 组件', () => {
  it('应该渲染 Logo', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('AI Love Predictor');
    expect(logo).toBeInTheDocument();
  });

  it('应该渲染导航链接', () => {
    render(<Header />);
    
    expect(screen.getByText('首页')).toBeInTheDocument();
    expect(screen.getByText('测评中心')).toBeInTheDocument();
    expect(screen.getByText('成功案例')).toBeInTheDocument();
    expect(screen.getByText('会员服务')).toBeInTheDocument();
  });

  it('应该渲染登录和注册按钮', () => {
    render(<Header />);
    
    expect(screen.getByText('登录')).toBeInTheDocument();
    expect(screen.getByText('注册')).toBeInTheDocument();
  });
}); 