import styled from 'styled-components';

export const BackButton = styled.a`
  display: block;
  margin-bottom: 32px;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;

export const Main = styled.main`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Metadata = styled.span`
  display: block;
  margin-bottom: 26px;

  color: #7a8c99;
  font-family: Helvetica;
  font-size: 20px;
  letter-spacing: 0.22px;
  line-height: 24px;

  strong {
    background-color: #7a8c99;
    border-radius: 4px;

    color: #0a1014;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.17px;
    line-height: 20px;
    padding: 4px 6px;
    display: inline-block;
  }
`;

export const MovieTitle = styled.h2`
  color: #ffffff;
  font-family: Helvetica;
  font-size: 80px;
  font-weight: 400;
  letter-spacing: 0.87px;
  line-height: 88px;
  margin-bottom: 32px;
`;

export const Badges = styled.div`
  margin-bottom: 48px;
  display: flex;

  > div {
    margin-right: 16px;
  }
`;

export const MovieDetails = styled.section`
  width: 49.152542373%;
`;

export const Plot = styled.div`
  width: 100%;
  margin-bottom: 40px;

  padding-right: 17.24137931%;
`;

export const SecondaryInfo = styled.div`
  padding-right: 17.24137931%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
