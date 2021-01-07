import axios from "axios";

const ApiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${window.location.origin}/api`
      : "https://localhost:3000/api",
});

ApiClient.interceptors.request.use(
  async (config) => {
    const token = localstorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default ApiClient;
