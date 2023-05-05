import axios from "axios";
import { URLS, CONSTANTS } from "../utils";

const requestServer = axios.create({
  baseURL: URLS.BASE_URL_SERVER,
  timeout: 600000,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

requestServer.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(CONSTANTS.TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete requestServer.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

const downloadFile = (url, title) => {
  axios({
    method: "get",
    url,
    responseType: "arraybuffer",
  })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    })
    .catch(() => console.log("error occured"));
};
requestServer.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const mode = process.env.VUE_APP_MODE;
    if (error.response.status === 401) {
      localStorage.removeItem(CONSTANTS.TOKEN);
      localStorage.removeItem(CONSTANTS.AUTH_STORAGE);
      location.reload();
    } else if (error.response.status === 404 && mode != "development") {
      location.href = "/page-not-found";
    } else if (error.response.status === 500 && mode != "development") {
      location.href = "/page-server-error";
    }
    return Promise.reject(error);
  }
);
export const API = {
  requestServer,
  downloadFile,
};
