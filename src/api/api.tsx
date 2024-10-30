import axios from "axios";

export const base_url = "http://localhost:3033/api";

const api = axios.create({
  baseURL: base_url,
});

export const getMsg = async () => {
  try {
    const response = await api.get("queues");
    console.log("res on get msg", response);
    return response.data;
  } catch (error) {
    console.error("Error with GET request:", error);
    throw error;
  }
};

export const uploadFiles = async (
  body: FormData,
  endpoint: string = "/upload"
) => {
  try {
    const response = await api.post(endpoint, body);
    return response.data;
  } catch (error) {
    console.error("Error with GET request:", error);
    throw error;
  }
};

export const downloadFile = async (fileId: string) => {
  const fileName = `${base_url}/download/${fileId}`;
  try {
    const response = await api.get(fileName);
    return response.data;
  } catch (error) {
    console.error("Error with GET request:", error);
    throw error;
  }
};

export default api;
