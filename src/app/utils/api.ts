import axios from 'axios';
export const publicKey = 'e6f98237764d370d94f1e8a3e79b2d31';
export const HASH = '185487dc3afca2d508051b7f856cf1c8';
export const marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});
export const API = axios.create({ baseURL: 'http://localhost:3000/api' });
