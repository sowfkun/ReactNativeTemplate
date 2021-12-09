import axios from 'axios';
import { stringify } from 'query-string';

const axiosClient = axios.create({
  // define base api url, header json type, and use query string param
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
  paramsSerializer: (params) => stringify(params),
});

// handle token for authorization
axiosClient.interceptors.request.use(async (config) => {
  return config;
});

// if exist data, response that data
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  // handle error
  (error) => {
    throw error;
  },
);

export default axiosClient;
