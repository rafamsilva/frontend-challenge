import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ReactComponent as BackIcon } from '../../assets/images/icon-arrow-white.svg';
import { ReactComponent as ImdbLogo } from '../../assets/images/logo-imdb.svg';
import { ReactComponent as CotationLogo } from '../../assets/images/icon-cotation.svg';

import Wrapper from '../../components/wrapper';
import FullMovieCover from '../../components/full-movie-cover/';
import Badge from '../../components/badge/';
import Blockquote from '../../components/blockquote/';
import FavoriteButton from '../../components/favorite-button/';
import Header from '../../components/header';

import OmdbProvider from '../../providers/omdb.provider';

import { START_LOADER_ACTION, STOP_LOADER_ACTION } from '../../store/actions';

import { Main, BackButton, MovieDetails, Plot, SecondaryInfo, Badges, MovieTitle, Metadata } from './style';

export default function MoviePage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      dispatch(START_LOADER_ACTION());

      setMovie(await OmdbProvider.fetchMovie(id));

      dispatch(STOP_LOADER_ACTION());
    };

    fetchData();
  }, [id, dispatch]);

  return (
    <Wrapper>
      <Header showSearchBar={false} />

      <BackButton to="/">
        <BackIcon alt="Go back" title="Go back" />
      </BackButton>

      <Main>
        <MovieDetails>
          <Metadata>
            {movie.Runtime} · 2014 · <strong>R</strong>
          </Metadata>

          <MovieTitle>{movie.Title}</MovieTitle>

          <Badges>
            <Badge color="#FF9F1C" icon={<ImdbLogo alt="IMDB Logo" title="IMDB Logo" />} value={`${movie.imdbRating}/10`} />

            <Badge color="#FF4040" icon={<CotationLogo alt="Cotation Logo" title="Cotation Logo" />} value="96%" />

            <FavoriteButton />
          </Badges>

          <Plot>
            <Blockquote title="Plot" text={movie.Plot} />
          </Plot>

          <SecondaryInfo>
            <Blockquote title="Cast" list={['Jemaine Clement', 'Cori Gonzalez-Macuer', 'Taika Waititi', 'Jonny Brugh']} />

            <Blockquote title="Genre" list={['Comedy', 'Horror']} />

            <Blockquote title="Director" list={['Jemaine Clement', 'Taika Waititi']} />
          </SecondaryInfo>
        </MovieDetails>

        <FullMovieCover image={movie.Poster} alt={movie.Title} title={movie.Title} />
      </Main>
    </Wrapper>
  );
}
