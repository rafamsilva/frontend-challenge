import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: block;
  margin-bottom: 32px;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;
