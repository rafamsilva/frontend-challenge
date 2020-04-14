import React from 'react';
import { useSelector } from 'react-redux';

import { Container, MovieGrid } from './style';

import MoviesGridItem from '../../components/movies-grid-item';
import NothingFound from '../../components/nothing-found';

export default function MoviesContainer() {
  const lastFilter = useSelector((state) => state.lastFilter);
  const movies = useSelector((state) => (state.movies ? state.movies.Search : []));

  return (
    <Container>
      {movies ? (
        <MovieGrid>
          {movies.map((value, index) => {
            return <MoviesGridItem image={value.Poster} title={value.Title} year={value.Year} id={value.imdbID} key={index} />;
          })}
        </MovieGrid>
      ) : (
        <NothingFound terms={lastFilter} />
      )}
    </Container>
  );
}
