import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api.jikan.moe/v3',
});
