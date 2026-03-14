

# 🚀 Modern React Starter Kit

这是一个基于 **React 19** 和 **Vite 7** 构建的高性能前端脚手架模板，集成了当前前端生态中最领先的工具链。

## ✨ 特性 (Features)

* **核心框架**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) - 享受最新的 React 特性与严格的类型检查。
* **构建工具**: [Vite 7](https://vite.dev/) - 极速的热更新 (HMR) 与打包体验。
* **路由管理**: [TanStack Router](https://tanstack.com/router) - 强类型的类型安全路由，支持自动路由生成。
* **状态管理 & 请求**:
* [Zustand](https://zustand-demo.pmnd.rs/) - 轻量级、响应式的状态管理。
* [TanStack Query v5](https://tanstack.com/query) - 强大的异步数据同步与缓存管理。


* **UI & 样式**:
* [Tailwind CSS v4](https://tailwindcss.com/) - 采用最新的引擎，性能更强，配置更简洁。
* [HeroUI (fka NextUI)](https://heroui.com/) - 现代化的 React 组件库。
* [Lucide React](https://lucide.dev/) - 优美的图标库。
* [Motion](https://motion.dev/) - 流畅的声明式动画。


* **代码规范**: [ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/) - 插件化的 lint 配置，保持代码整洁。

---

## 🛠️ 技术栈 (Tech Stack)

| 类别 | 方案 |
| --- | --- |
| **视图层** | React 19 (Latest) |
| **构建** | Vite 7 + @tailwindcss/vite |
| **路由** | TanStack Router |
| **状态** | Zustand |
| **请求** | Axios + TanStack Query |
| **UI** | HeroUI + Tailwind CSS v4 |
| **动画** | Motion (Framer Motion) |

---

## 📦 快速开始 (Getting Started)

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd frontend

```

### 2. 安装依赖

推荐使用 `pnpm` 以获得更快的安装速度：

```bash
pnpm install
# 或者
npm install

```

### 3. 启动开发服务器

```bash
npm run dev

```

### 4. 构建生产环境

```bash
npm run build

```

---

## 📂 项目结构 (Directory Structure)

```text
src/
├── components/     # 公用组件
├── hooks/          # 自定义 Hooks
├── routes/         # TanStack Router 路由定义
├── store/          # Zustand 状态管理
├── api/            # Axios 请求封装与接口定义
├── App.tsx         # 根组件
└── main.tsx        # 入口文件

```

---

## 🔧 脚本说明 (Scripts)

* `dev`: 启动 Vite 开发服务器。
* `build`: 执行 TypeScript 类型检查并进行生产环境打包。
* `lint`: 使用 ESLint 检查代码质量。
* `preview`: 本地预览生产环境构建产物。

---

## 📝 开发注意事项

1. **路由生成**: 本项目集成了 `@tanstack/router-plugin`，在 `dev` 模式下会自动根据 `src/routes` 目录生成路由树。
2. **样式**: 使用 Tailwind CSS v4，直接在 CSS 中通过 `@theme` 进行配置，无需繁琐的 `tailwind.config.js`。
3. **类型安全**: 请确保在开发过程中保持 `tsc` 检查通过，以充分发挥脚手架的类型优势。

---

**Happy Coding!** 👩‍💻👨‍💻
