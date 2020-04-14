import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

import { Container } from './style';

export default function LoaderContainer() {
  const active = useSelector((state) => state.loading);

  return (
    <Container active={active}>
      <ReactLoading type="spin" color="#fff" />
    </Container>
  );
}
