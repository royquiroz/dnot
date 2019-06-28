import axios from "axios";
import { config } from "../utils/config";

export const forgotPassword = async email => {
  console.log(email);
  try {
    let res = await axios.post(`${config.url}/enviarCambioPassword`, email);
    return res;
  } catch (e) {
    return e.response;
  }
};
