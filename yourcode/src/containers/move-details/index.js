import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ImdbLogo } from '../../assets/images/logo-imdb.svg';
import { ReactComponent as CotationLogo } from '../../assets/images/icon-cotation.svg';

import FullMovieCover from '../../components/full-movie-cover/';
import Badge from '../../components/badge/';
import Blockquote from '../../components/blockquote/';
import FavoriteButton from '../../components/favorite-button/';

import { Container, MovieDetails, Plot, SecondaryInfo, Badges, MovieTitle, Metadata } from './style';

import { REMOVE_MOVIE_FAVORITE_ACTION, ADD_MOVIE_FAVORITE_ACTION } from '../../store/actions';

export default function MovieDetailsContainer({ id, movie }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState({});

  function toggleFavorite(movieId) {
    return isFavorite ? dispatch(REMOVE_MOVIE_FAVORITE_ACTION(movieId)) : dispatch(ADD_MOVIE_FAVORITE_ACTION(movieId));
  }

  useEffect(() => {
    function isMovieOnFavorites(movieId) {
      return Boolean(favorites.find((movie) => movie === movieId));
    }

    setIsFavorite(isMovieOnFavorites(id));
  }, [id, favorites]);

  return (
    <Container>
      <MovieDetails>
        {movie.Runtime || movie.Released || movie.Rated ? (
          <Metadata>
            {movie.Runtime} {movie.Runtime && (movie.Released || movie.Rated) ? '· ' : null}
            {movie.Released} {movie.Released && movie.Rated ? '· ' : null}
            {movie.Rated ? <strong>{movie.Rated}</strong> : null}
          </Metadata>
        ) : null}

        <MovieTitle>{movie.Title}</MovieTitle>

        <Badges>
          {movie.imdbRating ? <Badge color="#FF9F1C" icon={<ImdbLogo alt="IMDB Logo" title="IMDB Logo" />} value={`${movie.imdbRating}/10`} /> : null}

          {movie.imdbVotes ? <Badge color="#FF4040" icon={<CotationLogo alt="Total Votes" title="Total Votes" />} value={movie.imdbVotes} /> : null}

          <span onClick={() => toggleFavorite(id)}>
            <FavoriteButton active={isFavorite} />
          </span>
        </Badges>

        {movie.Plot ? (
          <Plot>
            <Blockquote title="Plot" text={movie.Plot} />
          </Plot>
        ) : null}

        <SecondaryInfo>
          {movie.Actors ? <Blockquote title="Cast" list={movie.Actors} /> : null}

          {movie.Genre ? <Blockquote title="Genre" list={movie.Genre} /> : null}

          {movie.Director ? <Blockquote title="Director" list={movie.Director} /> : null}
        </SecondaryInfo>
      </MovieDetails>

      <FullMovieCover image={movie.Poster} alt={movie.Title} title={movie.Title} />
    </Container>
  );
}
