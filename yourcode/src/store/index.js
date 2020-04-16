import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducer';
import { fetchMoviesSaga } from './sagas';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['loading'],
};

const sagaMiddleware = createSagaMiddleware();

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(fetchMoviesSaga);
