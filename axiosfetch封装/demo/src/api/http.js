import axios from "axios";
import qs from "qs";

switch (process.env.NODE_ENV) {
  case "production":
    axios.defaults.baseURL = "http://api.shabifengyu.cn";
    break;
  case "test":
    axios.defaults.baseURL = "http://192.168.0.20:3000";
    break;
  default:
    axios.defaults.baseURL = "http://127.0.0.1:3000";
}

// 设置超时时间和跨域是否允许携带凭证

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// 设置请求传递数据的格式
// x-www-form-urlencoded

axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.transformRequest = data => qs.stringify(data);

// 设置请求拦截器
// 客户端发送请求 -> [请求拦截器] -> 服务器
// TOKEN校验(JWT) 接收服务器返回的token,存储到vuex/本地存储中，每一次向服务器发送请求，
// 我们应该把token带上

axios.interceptors.request.use(
  config => {
    // 携带上token
    let token = localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
// 服务器返回信息 ->  [拦截的统一处理] -> 客户端JS获取到信息

// axios.defaults.validateStatus = status => {
//   // 自定义响应成功的HTTP状态码
//   return /^(2|3)\d{2}$/.test(status);
// };

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    let { response } = error;
    if (response) {
      // 服务器返回结果了
      switch (response.status) {
        case 401: // 权限
          break;
        case 403: // 服务器拒绝执行(token过期)
          break;
        case 404: // 找不到页面
          break;
      }
    } else {
      // 服务器没有返回
      // 1.服务器蹦了
      // 2.断网了
      if (!window.navigator.onLine) {
        // 断网处理: 可以跳转到断网页面
        return;
      }
      return Promise.reject(error);
    }
  }
);

export default axios;
