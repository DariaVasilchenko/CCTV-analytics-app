import axios from "axios";

export const API = axios.create({
  baseURL: "http://ml-iu5.local.bmstu.ru:8110",
  headers: {
    "Content-type": "multipart/form-data",
    'Accept': 'application/json',
  }
});