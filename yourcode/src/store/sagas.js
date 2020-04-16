import { call, put, takeLatest } from 'redux-saga/effects';

import OmdbProvider from '../providers/omdb.provider';

function* fetchMovies(action) {
  const filter = action.payload.text;

  try {
    yield put({ type: 'START_LOADER' });
    yield put({ type: 'SET_FILTER', payload: { filter } });

    const movies = filter ? yield call(OmdbProvider.fetchMovies, filter) : [];

    yield put({ type: 'MOVIES_FETCH_SUCCEEDED', payload: { movies } });
  } catch (err) {
    yield put({ type: 'MOVIES_FETCH_FAILED', payload: { err } });
  }
}

export function* fetchMoviesSaga() {
  yield takeLatest('MOVIES_FETCH_REQUESTED', fetchMovies);
}
