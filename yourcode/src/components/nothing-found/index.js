import React from 'react';

import { Container, Illustration, Title, Description } from './style';

export default function NothingFound({ terms }) {
  return (
    <Container>
      <Illustration alt="Illustration" title="Illustration" />

      <Title>{terms ? 'Sorry, nothing found!' : 'Don’t know what to search?'}</Title>

      <Description>
        {terms ? `Sorry, nothing was found to term: \`${terms}\`. Try again with different terms` : 'Here’s an offer you can’t refuse'}
      </Description>
    </Container>
  );
}
