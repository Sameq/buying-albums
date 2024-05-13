import axios from "axios";

export const api_user = axios.create({
  baseURL: "http://localhost:8080",
});

export const api_album = axios.create({
  baseURL: "http://localhost:8082",
});
