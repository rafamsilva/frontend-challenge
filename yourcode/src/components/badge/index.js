import React from 'react';
import { Container, Icon, Text } from './style';

export default function Badge({ color, icon, value }) {
  return (
    <Container>
      {icon ? (
        <Icon data-testid="icon" color={color}>
          {icon}
        </Icon>
      ) : null}

      <Text data-testid="text">{value}</Text>
    </Container>
  );
}
