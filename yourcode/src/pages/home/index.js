import React from 'react';

import Wrapper from '../../components/wrapper';

import HeaderContainer from '../../containers/header';
import MoviesContainer from '../../containers/movies';

export default function HomePage() {
  return (
    <Wrapper>
      <HeaderContainer />

      <MoviesContainer />
    </Wrapper>
  );
}
