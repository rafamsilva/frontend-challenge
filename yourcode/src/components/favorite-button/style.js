import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  padding: 0 12px;
  border: 1px solid #353f4c;
  border-radius: 4px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  background-color: ${(props) => (props.active ? '#FF4040' : 'none')};
`;

export const Icon = styled.span`
  margin-right: 10px;
`;

export const Text = styled.span`
  color: ${(props) => (props.active ? '#FFF' : '#7a8c99')};
  font-family: Helvetica;
  font-size: 16px;
  letter-spacing: 0.17px;
  line-height: 19px;
`;
