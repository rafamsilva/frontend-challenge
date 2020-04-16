import React from 'react';

import Wrapper from '../../components/wrapper';
import Header from '../../components/header';

import MovieGridContainer from '../../containers/movie-grid';

export default function HomePage() {
  return (
    <Wrapper>
      <Header />

      <MovieGridContainer />
    </Wrapper>
  );
}
