import styled from 'styled-components';

const baseTextStyle = `
  font-family: Helvetica;
  font-size: 16px;
  letter-spacing: 0.17px;
  line-height: 24px;
`;

export const Container = styled.div``;

export const Title = styled.h4`
  ${baseTextStyle}

  color: #7a8c99;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  ${baseTextStyle}

  color: #ffffff;
`;

export const List = styled.ul``;

export const ListItem = styled(Text)``;
