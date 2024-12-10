import '@testing-library/jest-dom';

// 扩展 expect 匹配器
expect.extend({
  toHaveBeenCalledOnceWith(received: jest.Mock, ...args: any[]) {
    const pass = received.mock.calls.length === 1 &&
      JSON.stringify(received.mock.calls[0]) === JSON.stringify(args);

    return {
      pass,
      message: () => pass
        ? `期望函数没有被调用一次且参数为 ${JSON.stringify(args)}`
        : `期望函数被调用一次且参数为 ${JSON.stringify(args)}`,
    };
  },
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); 