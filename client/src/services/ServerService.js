import ApiClient from "./ApiClient";

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
