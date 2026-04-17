import axios from "axios";

const clientServer = axios.create({
  baseURL: "http://localhost:9080", // ✅ YOUR BACKEND PORT
});

export default clientServer;