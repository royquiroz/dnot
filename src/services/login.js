import axios from "axios";
import { config } from "../utils/config";

export const newToken = async user => {
  let res = await axios.post(`${config.url}/token/new`, user);

  if (res.data.response) {
    localStorage.setItem("token", JSON.stringify(res.data.result));
  }

  return res.data;
};

export const validateToken = async () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let res = await axios.post(`${config.url}/token/validate`, { token });

  if (!res.data.response) localStorage.removeItem("token");

  return res.data;
};

export const removeToken = async () => {
  localStorage.removeItem("token");

  window.location.reload();
};
