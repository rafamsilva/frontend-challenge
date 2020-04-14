import styled from 'styled-components';

export const Container = styled.div`
  max-width: 480px;
  width: 40.677966102%;
  height: 640px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 30px 0 rgba(5, 10, 13, 0.6);
  position: relative;
  background-color: #000;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
