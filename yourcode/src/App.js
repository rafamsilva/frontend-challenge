import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';

import LoaderContainer from './containers/loader';

import HomePage from './pages/home';
import MoviePage from './pages/movie';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
