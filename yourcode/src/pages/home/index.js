import React from 'react';

import Wrapper from '../../components/wrapper';
import Header from '../../components/header';

import MoviesContainer from '../../containers/movies';

export default function HomePage() {
  return (
    <Wrapper>
      <Header />

      <MoviesContainer />
    </Wrapper>
  );
}
