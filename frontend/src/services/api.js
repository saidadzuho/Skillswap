import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // promijeni kasnije u adresu svog backenda
});

export default api;