import React from 'react';
import './App.css';

import Logo from './components/logo';
import Search from './components/search';
import NothingFound from './components/nothing-found';
import MoviesGridItem from './components/movies-grid-item';
import Badge from './components/badge';
import FavoriteButton from './components/favorite-button';
import Blockquote from './components/blockquote';
import FullMovieCover from './components/full-movie-cover';

import { ReactComponent as ImdbIcon } from './assets/images/logo-imdb.svg';
import { ReactComponent as CotationIcon } from './assets/images/icon-cotation.svg';

function App() {
  return (
    <div className="App">
      <Logo />

      <Search />

      <NothingFound terms="Hello there!" />

      <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />

      <Badge color="#FF9F1C" icon={<ImdbIcon />} value="7.6/10" />

      <Badge color="#FF4040" icon={<CotationIcon />} value="96%" />

      <FavoriteButton />

      <Blockquote
        title="Plot"
        text="Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts."
      />

      <Blockquote title="Cast" list={['Jemaine Clement', 'Cori Gonzalez-Macuer', 'Taika Waititi', 'Jonny Brugh']} />

      <FullMovieCover image="https://www.fillmurray.com/800/800" />
    </div>
  );
}

export default App;
