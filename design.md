# 项目技术设计文档

## 项目概述
这是一个使用 Next.js App Router 架构的现代化 Web 应用程序模板。

## 技术栈
- **框架**: Next.js 15.0.4
- **开发语言**: TypeScript
- **样式解决方案**: Tailwind CSS
- **代码规范**: ESLint
- **CSS 处理器**: PostCSS

## 目录结构

src/
├── app/
│ ├── layout.tsx # 全局布局文件
│ ├── page.tsx # 首页组件
│ ├── globals.css # 全局样式
│ └── fonts/ # 本地字体文件
├── components/ # 可复用组件（待开发）
├── lib/ # 工具函数（待开发）
└── types/ # TypeScript 类型定义（待开发）


## 主要特性
1. **现代化路由系统**
   - 基于 Next.js App Router
   - 文件系统路由
   - 支持布局和嵌套路由

2. **样式系统**
   - Tailwind CSS 实现原子化 CSS
   - CSS 变量支持深色模式
   - 自定义字体（Geist）支持

3. **开发工具链**
   - TypeScript 类型检查
   - ESLint 代码规范
   - 支持路径别名 (@/*)

4. **性能优化**
   - 字体文件本地化
   - 图片组件优化
   - 自动代码分割

## 配置文件说明
- `next.config.ts`: Next.js 配置
- `tailwind.config.ts`: Tailwind CSS 配置
- `tsconfig.json`: TypeScript 配置
- `postcss.config.mjs`: PostCSS 配置
- `.eslintrc.json`: ESLint 规则配置

## 环境要求
- Node.js 版本: 支持 ES 模块
- 包管理器: npm/yarn/pnpm/bun

## 开发指南
1. 安装依赖：`npm install`
2. 开发环境：`npm run dev`
3. 构建项目：`npm run build`
4. 启动生产：`npm run start`
5. 代码检查：`npm run lint`