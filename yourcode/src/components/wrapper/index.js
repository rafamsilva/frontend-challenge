import React from 'react';

import { Container } from './style';

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}
