import Axios from 'axios';

export const axios= Axios.create({
  baseURL: '',
  headers: {
    "X-CSRF-Token": import.meta.env.VITE_API_CSRF_TOKEN,
    "Content-Type": 'application/json',
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