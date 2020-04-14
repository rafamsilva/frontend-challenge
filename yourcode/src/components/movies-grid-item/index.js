import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon-heart-white.svg';
import { ReactComponent as FullHeartIcon } from '../../assets/images/icon-heart-full.svg';

import { Container, Thumbnail, Caption, CaptionInfo, MovieTitle, MovieYear, CaptionActions, CaptionActionsItem } from './style';

export default function MoviesGridItem({ image, title, year, isFavorite }) {
  return (
    <Container>
      <Thumbnail>
        <img src={image} alt={title} />
      </Thumbnail>

      <Caption>
        <CaptionActions>
          <CaptionActionsItem>
            <a href="#">{isFavorite ? <FullHeartIcon /> : <HeartIcon />}</a>
          </CaptionActionsItem>
        </CaptionActions>

        <CaptionInfo to="/movie/1">
          <MovieTitle>{title}</MovieTitle>

          <MovieYear>{year}</MovieYear>
        </CaptionInfo>
      </Caption>
    </Container>
  );
}
