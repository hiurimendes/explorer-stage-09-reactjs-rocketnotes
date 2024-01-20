import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketnotes-api-jh4g.onrender.com"
});