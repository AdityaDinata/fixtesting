import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const instance = axios.create({ baseURL });
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
