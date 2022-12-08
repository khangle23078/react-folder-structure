import axios from "axios";

export const instance = axios.create({
   baseURL: 'http://localhost:8000/api/',
})

axios.interceptors.request.use(function (config) {
   const token = 'token';
   config.headers = {
      Authorization: token ? `Bearer ${token}` : null
   }
   return config;
}, function (error) {
   // Do something with request error
   return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
   if (response.status === 200) {
      return response.data;
   }
}, function (error) {
   // Any status codes that falls outside the range of 2xx cause this function to trigger
   // Do something with response error
   return Promise.reject(error);
});
