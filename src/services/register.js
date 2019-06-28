import axios from "axios";
import { config } from "../utils/config";

export const register = async user => {
  try {
    let res = await axios.post(`${config.url}/register`, user);
    return res;
  } catch (e) {
    return e.response;
  }
};
