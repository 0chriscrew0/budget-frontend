import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // adjust for your FastAPI backend
  withCredentials: true, // if using cookies (optional)
});

export default api;
