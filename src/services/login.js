import axios from "axios";
import { config } from "../utils/config";

export const newToken = async user => {
  let res = await axios.post(`${config.url}/token/new`, user);

  if (res.data.response) {
    let token = res.data.result.token;
    localStorage.setItem("token", token);
    delete res.data.result.token;
    localStorage.setItem("user", JSON.stringify(res.data.result));
    localStorage.setItem("id", res.data.result.usuario_id);
  }

  return res.data;
};

export const validateToken = async () => {
  let token = localStorage.getItem("token");
  let res = await axios.post(`${config.url}/token/validate`, { token });

  if (!res.data.response) localStorage.removeItem("token");

  return res.data;
};

export const removeToken = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("id");

  window.location.reload();
};
