import React from 'react';
import { useSelector } from 'react-redux';

import { Container, MovieGrid } from './style';

import MoviesGridItemContainer from '../../containers/movie-grid-item';
import NothingFound from '../../components/nothing-found';

export default function MovieGridContainer() {
  const lastFilter = useSelector((state) => state.lastFilter);
  const movies = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites);

  function isMovieOnFavorites(movieId) {
    return Boolean(favorites.find((movie) => movie === movieId));
  }

  return (
    <Container>
      {movies.length ? (
        <MovieGrid>
          {movies.map((value, index) => {
            return (
              <MoviesGridItemContainer
                image={value.Poster}
                title={value.Title}
                year={value.Year}
                id={value.imdbID}
                key={index}
                isFavorite={isMovieOnFavorites(value.imdbID)}
              />
            );
          })}
        </MovieGrid>
      ) : (
        <NothingFound terms={lastFilter} />
      )}
    </Container>
  );
}
