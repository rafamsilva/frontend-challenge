import React from 'react';
import { ReactComponent as HeartIcon } from '../../assets/images/icon-heart-grey.svg';
import { ReactComponent as FullHeartIcon } from '../../assets/images/icon-heart-full.svg';

import { Container, Icon, Text } from './style';

export default function FavoriteButton({ active }) {
  return (
    <Container active={active}>
      <Icon>
        {active ? (
          <FullHeartIcon alt="Unlike" title="Unlike" data-testid="liked-icon" />
        ) : (
          <HeartIcon alt="Like" title="Like" data-testid="unliked-icon" />
        )}
      </Icon>

      <Text data-testid="text" active={active}>
        {active ? 'Added' : 'Add to favourites'}
      </Text>
    </Container>
  );
}
