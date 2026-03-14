import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

// 实例化 QueryClient
const queryClient = new QueryClient();

// 配置 Router 实例
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  // 🌟 将 queryClient 注入到 router 的上下文中
  // 这样就能在每个路由的 loader 里通过 context.queryClient 使用 react-query 了
  context: {
    queryClient,
  },
});

// 注册类型安全
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// 挂载渲染
const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MantineProvider>
        <Notifications />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </React.StrictMode>,
  );
}
