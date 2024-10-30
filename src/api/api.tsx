import axios from "axios";

export const base_url = "http://localhost:3033/api";

const api = axios.create({
  baseURL: base_url,
});

export const getAllMsg = async () => {
  try {
    const response = await api.get("queues");
    console.log("res on get msg", response);
    return response.data;
  } catch (error) {
    console.error("Error with GET request:", error);
    throw error;
  }
};

export const getOneMsg = async (queue: string) => {
  try {
    // eslint-disable-next-line no-throw-literal
    if (!queue) throw { message: "Queue is empty, can't send the request" };
    console.log(`get from queue ${queue}`);
    const response = await api.get(queue);
    console.log("res on get one msg", response);
    if (response.status === 204) return false;
    return response.data;
  } catch (error) {
    console.error("Error with GET request:", error);
    throw error;
  }
};

// Publish a new message to a specified queue
export const postMessage = async (
  queue: string,
  message: { message: string }
) => {
  try {
    const response = await api.post(queue, message);
    console.log("res on post msg", response);
    return response.data;
  } catch (error) {
    console.error("Error with POST request:", error);
    throw error;
  }
};

export default api;
