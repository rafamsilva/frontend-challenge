import { call, put, takeLatest } from 'redux-saga/effects';
import OmdbProvider from '../providers/omdb.provider';

function* fetchMovies(action) {
  try {
    yield put({ type: 'START_LOADER' });

    const movies = yield call(OmdbProvider.fetchMovies, action.payload.text);

    yield put({ type: 'MOVIES_FETCH_SUCCEEDED', payload: { movies } });
  } catch (err) {
    yield put({ type: 'MOVIES_FETCH_FAILED', payload: { err } });
  }
}

export function* fetchMoviesSaga() {
  yield takeLatest('MOVIES_FETCH_REQUESTED', fetchMovies);
}
