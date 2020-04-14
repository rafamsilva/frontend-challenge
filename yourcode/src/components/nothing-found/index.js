import React from 'react';

import { Container, Illustration, Title, Description } from './style';

export default function NothingFound({ terms }) {
  return (
    <Container>
      <Illustration alt="Illustration" title="Illustration" />

      <Title>Sorry, nothing found!</Title>

      <Description>Sorry, nothing was found to term: `{terms}`. Try again with different terms</Description>
    </Container>
  );
}
