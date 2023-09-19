import Axios from 'axios';
import { API_URL } from '@/config/apiUrls'

export const axios= Axios.create({
  // baseURL: API_URL,
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  }
});

axios.interceptors.request.use(
  ( request ) => {
    return request;
  },
  ( error ) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  ( response ) => {
    return response.data;
  },
  ( error ) => {
    const message= error.response?.data?.message || error.message;

    return Promise.reject(error);
  }
);