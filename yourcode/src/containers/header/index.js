import React from 'react';

import Logo from '../../components/logo/';
import SearchBarContainer from '../search-bar/';

import { Container, HomeButton } from './style';

export default function HeaderContainer({ showSearchBar = true }) {
  return (
    <Container>
      <HomeButton to="/">
        <Logo />
      </HomeButton>

      {showSearchBar ? <SearchBarContainer /> : null}
    </Container>
  );
}
