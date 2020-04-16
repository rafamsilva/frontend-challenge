export function MOVIES_FETCH_REQUESTED_ACTION(text) {
  return {
    type: 'MOVIES_FETCH_REQUESTED',
    payload: {
      text,
    },
  };
}

export function START_LOADER_ACTION(text) {
  return {
    type: 'START_LOADER',
    payload: {
      text,
    },
  };
}

export function STOP_LOADER_ACTION(text) {
  return {
    type: 'STOP_LOADER',
    payload: {
      text,
    },
  };
}

export function ADD_MOVIE_FAVORITE_ACTION(movieId) {
  return {
    type: 'ADD_MOVIE_FAVORITE',
    payload: {
      movieId,
    },
  };
}

export function REMOVE_MOVIE_FAVORITE_ACTION(movieId) {
  return {
    type: 'REMOVE_MOVIE_FAVORITE',
    payload: {
      movieId,
    },
  };
}
