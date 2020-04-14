import React from 'react';

import { Container, MovieGrid } from './style';

import MoviesGridItem from '../../components/movies-grid-item';
import NothingFound from '../../components/nothing-found';

export default function MoviesContainer({ movies }) {
  return (
    <Container>
      {movies ? (
        <MovieGrid>
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
          <MoviesGridItem image="https://www.fillmurray.com/400/400" title="What We Do in the Shadows" year="2018" />
        </MovieGrid>
      ) : (
        <NothingFound />
      )}
    </Container>
  );
}
