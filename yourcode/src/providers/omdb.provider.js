import axios from 'axios';

const API_KEY = '7e7d639c';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const BASE_POSTER_URL = `http://img.omdbapi.com/?apikey=${API_KEY}`;

const Provider = {
  fetchMovie: async (id) => {
    return (await axios.get(`${BASE_URL}&i=${id}`)).data;
  },

  fetchMovies: async (filter) => {
    return (await axios.get(`${BASE_URL}&s=${filter}`)).data;
  },
};

export default Provider;
