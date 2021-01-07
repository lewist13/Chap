import ApiClient from "./ApiClient";

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
    localstorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateUser = async (formData, user_id) => {
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

export const __SessionStatus = async () => {
  try {
    const res = await ApiClient.post("/users/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};
