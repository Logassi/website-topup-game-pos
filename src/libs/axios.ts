import axios from "axios";
// import { getCookie } from "cookies-next";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_API_URL ||
    "https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1",
  withCredentials: false,
});

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token = getCookie("access_token");
//     if (token) {
//       config.headers.Authorization = "Bearer " + token;
//     }

//     return config;
//   },
//   async (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
