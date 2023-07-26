import axios from "axios";
import ApiConstants from "./ApiConstants";

const apiInstance = axios.create({
  baseURL: ApiConstants.BASE_URL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5000",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    cache: "no-cache",
    mode: "cors",
    redirect: "follow",
    // 'x-user-agent': userAgent(),
    "x-user-agent": "test",
    referrer: "no-referrer",
  },
});

apiInstance.interceptors.request.use(
  async function (config) {
    const refreshToken = "test token";
    const token = localStorage.getItem("token");
    config.headers = {
      ...config.headers,
      Authorization: `bearer ${token}`,
      refreshToken: refreshToken,
    };
    if (!config.headers.Authorization) {
      delete config.headers.Authorization;
    }
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiInstance;
