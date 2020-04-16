import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ReactComponent as BackIcon } from '../../assets/images/icon-arrow-white.svg';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';

import OmdbProvider from '../../providers/omdb.provider';

import MovieDetailsContainer from '../../containers/movie-details';

import { START_LOADER_ACTION, STOP_LOADER_ACTION } from '../../store/actions';

import { BackButton } from './style';

export default function MoviePage() {
  const { id } = useParams();

  const dispatch = useDispatch();
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

      <MovieDetailsContainer id={movie.imdbID} movie={movie} />
    </Wrapper>
  );
}
