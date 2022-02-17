import axios from "axios";
import {
  getToken,
  saveTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from "@nabstore/utils";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

const login = async ({ email, password }) => {
  const res = await api.post(
    `/login`,
    { email, senha: password },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  saveTokenToLocalStorage(res.data.token);
  return res.data.usuario;
};

const logout = async () => {
  const res = await api.get(`/logout`);
  removeTokenFromLocalStorage();
  return res.data;
};

const apiMethods = {
    login,
    logout,
};

export default apiMethods;
