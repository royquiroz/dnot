import axios from "axios";

let url = "https://mideclaranot.com/acces/login/public/token";

export const newToken = async user => {
  let res = await axios.post(`${url}/new`, user);

  if (res.data.response) {
    localStorage.setItem("token", JSON.stringify(res.data.result));
  }

  return res.data;
};

export const validateToken = async () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let res = await axios.post(`${url}/validate`, { token });

  if (!res.data.response) localStorage.removeItem("token");

  return res.data;
};
