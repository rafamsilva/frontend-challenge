import React from 'react';

import { Container, Icon, Input } from './style';

export default function SearchBarContainer() {
  function handleSearch(event) {
    console.log(event.target.value);
  }

  return (
    <Container>
      <Icon alt="Icon" title="Icon" />

      <Input placeholder="Search movies..." minLength={2} debounceTimeout={300} onChange={handleSearch} />
    </Container>
  );
}
