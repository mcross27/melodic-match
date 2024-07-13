import axios from 'axios';

const API_KEY = process.env.REACT_APP_LASTFM_API_KEY;
const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    format: 'json',
  },
});

export default api;