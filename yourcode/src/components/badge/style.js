import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid #353f4c;
  border-radius: 4px;
  box-shadow: 0 4px 30px 0 rgba(5, 10, 13, 0.3);

  span {
    height: 40px;
    padding: 0 8px;
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.span`
  border-radius: 4px 0 0 4px;
  background-color: ${(props) => props.color || 'none'};
`;

export const Text = styled.span`
  color: #ffffff;
  font-family: Helvetica;
  font-size: 16px;
  letter-spacing: 0.17px;
  line-height: 20px;
`;
