import axios from "axios";
import { tokenService } from "../service/tokenService";

export const axiosClient = axios;

axiosClient.defaults.baseURL = 'http://188.120.237.32:5001'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosClient.interceptors.request.use((config: any) => {
  if (!config) {
    config = {};
  }
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${tokenService.getJwtToken()}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      if (error.response.status === 403) {
        tokenService.removeJwtToken();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        window.location.reload(false);
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error.message);
  }
);
