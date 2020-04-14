import React from 'react';

import { Container } from './style';
import MoviesGridItem from '../../components/movies-grid-item';

export default function MoviesContainer({ movies }) {
  return (
    <Container>
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
    </Container>
  );
}
