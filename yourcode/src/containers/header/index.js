import React from 'react';

import Logo from '../../components/logo/';
import SearchBar from '../../components/search-bar/';

import { Container, HomeButton } from './style';

export default function HeaderContainer({ showSearchBar = true }) {
  return (
    <Container>
      <HomeButton href="#">
        <Logo />
      </HomeButton>

      {showSearchBar ? <SearchBar /> : null}
    </Container>
  );
}
