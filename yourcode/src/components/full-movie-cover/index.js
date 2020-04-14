import React from 'react';

import { Container } from './style';

export default function FullMovieCover({ image, alt }) {
  return (
    <Container>
      <img src={image} alt={alt} title={alt} />
    </Container>
  );
}
