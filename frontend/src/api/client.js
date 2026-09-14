import axios from 'axios';

const origin = import.meta.env.VITE_API_ORIGIN || '';

const client = axios.create({
  baseURL: `${origin}/api/v1`,
  timeout: 15000,
  headers: { Accept: 'application/json' }
});

export const assetUrl = (path) => `${origin}${path}`;

export default client;
