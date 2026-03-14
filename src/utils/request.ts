import axios from "axios";
import { notifications } from "@mantine/notifications";

// 创建 axios 实例
const request = axios.create({
  baseURL: "http://localhost:7788/api",
  timeout: 10000, // 请求超时时间 (10秒)
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

// 响应拦截器 (Response Interceptor)
request.interceptors.response.use(
  (response) => {
    // Axios 默认把后端返回的数据包裹在 response.data 中
    // res 是包含 { status, code, message, data } 的对象
    const res = response.data;

    // 如果返回的是二进制文件流 (导出Excel等场景)，直接返回
    if (response.config.responseType === "blob") {
      return res;
    }

    // 判断你后端的业务状态码 code
    if (res.code === 200) {
      // 核心：请求成功，直接剥离外层，把里面的 data 返回给前端业务组件！
      return res.data;
    } else {
      // 业务错误统一处理 (比如 code 为 400, 500 等)
      console.error(`业务错误: ${res.message || "未知错误"}`);

      const msg = res.message || "系统繁忙，请稍后再试";
      notifications.show({
        title: `Notification`,
        message: msg,
        position: "top-center",
        color: "red",
      });

      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  (error) => {
    // HTTP 网络层面的错误处理 (如 404, 502 等)
    let errorMessage = "网络请求异常";
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage = "请求参数错误";
          break;
        case 401:
          errorMessage = "未授权，请登录";
          break;
        case 403:
          errorMessage = "拒绝访问";
          break;
        case 404:
          errorMessage = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          errorMessage = "请求超时";
          break;
        case 500:
          errorMessage = "服务器内部错误";
          break;
        default:
          errorMessage = `网络错误: ${error.response.status}`;
      }
    } else if (error.message.includes("timeout")) {
      errorMessage = "请求超时，请检查网络";
    }

    console.error(errorMessage);

    notifications.show({
      title: `Notification`,
      message: errorMessage,
      position: "top-center",
      color: "red",
    });

    return Promise.reject(error);
  },
);

export default request;
