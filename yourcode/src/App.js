import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from './components/loader';

import HomePage from './pages/home';
import MoviePage from './pages/movie';

function App() {
  return (
    <Router>
      <Loader />

      <Switch>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
