import axios from 'axios';

import { MoviesUtil } from '../utils/movies.util';

const API_KEY = '7e7d639c';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const Provider = {
  fetchMovie: async (id) => {
    let response = (await axios.get(`${BASE_URL}&i=${id}`)).data;

    if (response) {
      if (response.Error) {
        return undefined;
      }

      response = MoviesUtil.convertNAFieldToUndefined(response);
      response = MoviesUtil.formatFields(response);
    }

    return response;
  },

  fetchMovies: async (filter) => {
    let response = (await axios.get(`${BASE_URL}&s=${filter}`)).data;

    response = response.Search || [];

    if (response && response.length) {
      response = response.map(MoviesUtil.convertNAFieldToUndefined);
    }

    return response;
  },
};

export default Provider;
