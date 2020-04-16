import React from 'react';

import { Container } from './style';

export default function FullMovieCover({ image, alt }) {
  return <Container>{image ? <img data-testid="image" src={image} alt={alt} title={alt} /> : null}</Container>;
}
