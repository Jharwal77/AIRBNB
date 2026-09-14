import axios from 'axios';

const origin = import.meta.env.VITE_API_ORIGIN || '';

const client = axios.create({
  baseURL: `${origin}/api/v1`,
  timeout: 15000,
  headers: {
    Accept: 'application/json'
  }
});

export const assetUrl = (path) => {
  if (!path) return path;

  // Already an absolute URL
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Convert relative asset path to backend URL
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
};

export default client;