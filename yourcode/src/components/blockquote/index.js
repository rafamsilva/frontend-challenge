import React from 'react';

import { Container, Title, Text, List, ListItem } from './style';

export default function Blockquote({ title, text, list }) {
  return (
    <>
      <Container>
        <Title>{title}</Title>

        {text ? <Text>{text}</Text> : null}

        {!list ? null : (
          <List>
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
    </>
  );
}
