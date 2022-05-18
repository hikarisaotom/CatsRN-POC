import axios from 'axios';

const baseURL = 'https://api.thecatapi.com/v1';

const catsApi = axios.create({baseURL});
catsApi.interceptors.request.use(async config => {
  const apiKey = 'c1f2e222-32ab-4581-89e7-953017a7e047';
  config.headers['x-api-key'] = apiKey;
  return config;
});

export default catsApi;
