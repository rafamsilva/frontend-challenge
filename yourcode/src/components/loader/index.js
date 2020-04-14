import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './style';

export default function Loader({ active }) {
  return (
    <Container active={active}>
      <ReactLoading type="spin" color="#fff" />
    </Container>
  );
}
