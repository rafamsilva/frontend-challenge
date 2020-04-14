import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeButton = styled.a`
  margin-bottom: 24px;
  text-decoration: underline;

  &:hover {
    opacity: 0.85;
  }
`;
