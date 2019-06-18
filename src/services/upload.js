import axios from "axios";

let url = "http://dnot.mx/api/public/index.php/excel/txt";

export const upload = file => {
  console.log(file);

  return axios.post(`${url}`, file).then(res => res);
};
