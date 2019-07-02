import axios from "axios";
import { config } from "../utils/config";

export const validationEmail = async email => {
  try {
    let res = await axios.post(`${config.url}/reenviarVerificacion`, email);
    return res;
  } catch (e) {
    return e.response;
  }
};
