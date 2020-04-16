import React from 'react';

import { Container, Title, Text, List, ListItem } from './style';

export default function Blockquote({ title, text, list }) {
  return (
    <Container>
      <Title data-testid="title">{title}</Title>

      {text ? <Text data-testid="text">{text}</Text> : null}

      {!list ? null : (
        <List data-testid="list">
          {list.map((value, index) => {
            return (
              <ListItem as="li" key={index}>
                {value}
              </ListItem>
            );
          })}
        </List>
      )}
    </Container>
  );
}
