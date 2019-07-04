import axios from "axios";
import { config } from "../utils/config";

const headers = {
  "Content-Type": "application/json",
  "APP-TOKEN": localStorage.getItem("token")
};

export const userInformation = async userId => {
  let res = await axios.get(`${config.url}/users/get/${userId.id}`, {
    headers
  });

  return res.data;
};

export const changeUserInformation = async user => {
  headers["APP-TOKEN"] = localStorage.getItem("token");
  try {
    let res = await axios.put(
      `${config.url}/users/update/${user.usuario_id}`,
      user,
      { headers }
    );
    //console.log(res);

    return res.data;
  } catch (e) {
    return e.response;
  }
};
