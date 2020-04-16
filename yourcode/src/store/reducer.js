import _ from 'lodash';

const INITIAL_STATE = {
  lastFilter: '',
  loading: false,
  movies: [],
  favorites: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'START_LOADER':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'STOP_LOADER':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'SET_FILTER':
      return Object.assign({}, state, {
        lastFilter: action.payload.filter,
      });
    case 'MOVIES_FETCH_SUCCEEDED':
      return Object.assign({}, state, {
        loading: false,
        movies: action.payload.movies,
      });
    case 'MOVIES_FETCH_FAILED':
      return Object.assign({}, state, {
        loading: false,
        err: action.payload.err,
      });
    case 'ADD_MOVIE_FAVORITE':
      return Object.assign({}, state, {
        favorites: _.uniq([...state.favorites, action.payload.movieId]),
      });
    case 'REMOVE_MOVIE_FAVORITE':
      return Object.assign({}, state, {
        favorites: state.favorites.filter((movie) => movie !== action.payload.movieId),
      });
    default:
      return state;
  }
}
