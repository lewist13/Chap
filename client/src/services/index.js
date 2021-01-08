import axios from "axios";
require("dotenv").config();

export const ApiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${window.location.origin}/api`
      : "http://localhost:3001/api",
});

ApiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export const __CreateUser = async (formData) => {
  try {
    const res = await ApiClient.post("/users/add", formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUsers = async () => {
  try {
    const res = await ApiClient.get(`/users/all`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUserById = async (user_id) => {
  try {
    const res = await ApiClient.get(`/users/${user_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __Login = async (userData) => {
  try {
    const res = await ApiClient.post("/users/login", userData);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateUser = async (user_id) => {
  try {
    const res = await ApiClient.put(`/users/update/${user_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteUser = async (user_id) => {
  try {
    const res = await ApiClient.delete(`/users/delete/${user_id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

const __SessionStatus = async () => {
  try {
    const res = await ApiClient.post("/users/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CreateServer = async (formData) => {
  try {
    const res = await ApiClient.post("/servers/add", formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetServerById = async (server_id) => {
  try {
    const res = await ApiClient.get(`/servers/${server_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateServer = async (server_id) => {
  try {
    const res = await ApiClient.put(`/servers/update/${server_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteServer = async (server_id) => {
  try {
    const res = await ApiClient.delete(`/servers/delete/${server_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CreateChannel = async (formData) => {
  try {
    const res = await ApiClient.post("/channels/add", formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetChannels = async (channel_id) => {
  try {
    const res = await ApiClient.get(`/channels/${channel_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateChannel = async (channel_id) => {
  try {
    const res = await ApiClient.put(`/channels/udpate/${channel_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteChannel = async (channel_id) => {
  try {
    const res = await ApiClient.delete(`/channels/delete/${channel_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CreateMessage = async (formData) => {
  try {
    const res = await ApiClient.post("/messages/add", formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetMessages = async (message_id) => {
  try {
    const res = await ApiClient.get(`/messages/${message_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateMessage = async (message_id) => {
  try {
    const res = await ApiClient.put(`/messages/${message_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteMessage = async (message_id) => {
  try {
    const res = await ApiClient.delete(`/messages/delete/${message_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default __SessionStatus;
