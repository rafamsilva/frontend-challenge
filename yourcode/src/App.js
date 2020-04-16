import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store, persistor } from './store';

import LoaderContainer from './containers/loader';

import HomePage from './pages/home';
import MoviePage from './pages/movie';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoaderContainer active={true} />} persistor={persistor}>
        <Router>
          <LoaderContainer />

          <Switch>
            <Route path="/movie/:id">
              <MoviePage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
