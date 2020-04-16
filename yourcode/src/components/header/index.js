import React from 'react';

import Logo from '../logo';
import SearchBarContainer from '../../containers/search-bar';

import { Container, HomeButton } from './style';

export default function Header({ showSearchBar = true }) {
  return (
    <Container>
      <HomeButton to="/">
        <Logo />
      </HomeButton>

      {showSearchBar ? <SearchBarContainer data-testid="search-bar" /> : null}
    </Container>
  );
}
