import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon-heart-grey.svg';
import { ReactComponent as FullHeartIcon } from '../../assets/images/icon-heart-full.svg';

import { Container, Icon, Text } from './style';

export default function FavoriteButton({ active }) {
  return (
    <Container href="#" active={active}>
      <Icon>{active ? <FullHeartIcon /> : <HeartIcon />}</Icon>

      <Text active={active}>{active ? 'Added' : 'Add to favourites'}</Text>
    </Container>
  );
}
