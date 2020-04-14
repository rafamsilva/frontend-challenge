import React from 'react';
import { Container, Icon, Text } from './style';

export default function Badge({ color, icon, value }) {
  return (
    <Container>
      <Icon color={color}>{icon}</Icon>

      <Text>{value}</Text>
    </Container>
  );
}
