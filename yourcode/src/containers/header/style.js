import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeButton = styled(Link)`
  margin-bottom: 24px;
  text-decoration: underline;

  &:hover {
    opacity: 0.85;
  }
`;
