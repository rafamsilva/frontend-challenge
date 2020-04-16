import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as HeartIcon } from '../../assets/images/icon-heart-white.svg';
import { ReactComponent as FullHeartIcon } from '../../assets/images/icon-heart-full.svg';

import { REMOVE_MOVIE_FAVORITE_ACTION, ADD_MOVIE_FAVORITE_ACTION } from '../../store/actions';

import { Container, Thumbnail, Caption, CaptionInfo, MovieTitle, MovieYear, CaptionActions, CaptionActionsItem } from './style';

export default function MovieGridItemContainer({ image, title, year, isFavorite, id }) {
  const dispatch = useDispatch();

  function toggleFavorite(movieId) {
    return isFavorite ? dispatch(REMOVE_MOVIE_FAVORITE_ACTION(movieId)) : dispatch(ADD_MOVIE_FAVORITE_ACTION(movieId));
  }

  return (
    <Container>
      <Thumbnail>
        <img src={image} alt={title} title={title} />
      </Thumbnail>

      <Caption>
        <CaptionActions>
          <CaptionActionsItem
            onClick={() => {
              toggleFavorite(id);
            }}
          >
            {isFavorite ? <FullHeartIcon alt="Unlike" title="Unlike" /> : <HeartIcon alt="Like" title="Like" />}
          </CaptionActionsItem>
        </CaptionActions>

        <CaptionInfo to={`/movie/${id}`}>
          <MovieTitle>{title}</MovieTitle>

          <MovieYear>{year}</MovieYear>
        </CaptionInfo>
      </Caption>
    </Container>
  );
}
