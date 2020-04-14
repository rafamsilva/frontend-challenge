import React from 'react';

import { Container, Icon, Input } from './style';

export default function SearchBar() {
  return (
    <Container>
      <Icon />

      <Input placeholder="Search movies..." />
    </Container>
  );
}
