import styled from 'styled-components';
import { ReactComponent as Empty } from '../../assets/images/empty-illustration.svg';

const customFont = `
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Illustration = styled(Empty)`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  ${customFont}

  color: #fff;
  font-size: 24px;
  letter-spacing: 0.26px;
  line-height: 29px;
  margin-bottom: 18px;
`;

export const Description = styled.p`
  ${customFont}

  color: #7a8c99;
  font-size: 16px;
  letter-spacing: 0.17px;
  line-height: 19px;
`;
