import axios from "axios";
import { config } from "../utils/config";

const headers = {
  "Content-Type": "application/json",
  "APP-TOKEN": localStorage.getItem("token")
};

export const listUsers = async () => {
  let res = await axios.get(`${config.url}/users/list`, {
    headers
  });

  //console.log(res.data);

  return res.data;
};
