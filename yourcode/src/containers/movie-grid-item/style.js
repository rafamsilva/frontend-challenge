import styled from 'styled-components';
import { Link } from 'react-router-dom';

const commonPosition = `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const commonText = `
  color: #ffffff;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 4px 30px 0 rgba(5, 10, 13, 0.3);
  overflow: hidden;
  display: block;
  position: relative;
`;

export const Thumbnail = styled.div`
  ${commonPosition}

  overflow: hidden;
  background-color: #000;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Caption = styled.div`
  ${commonPosition}

  background-color: rgba(19, 28, 37, 0.9);

  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${(props) => (props.active ? '1' : '0')};

  > ul {
    opacity: 0;
  }

  &:hover {
    opacity: 1;

    > ul {
      opacity: 1;
    }
  }
`;

export const CaptionActions = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const CaptionActionsItem = styled.li`
  cursor: pointer;
`;

export const CaptionInfo = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const MovieTitle = styled.h4`
  ${commonText}

  font-size: 20px;
  letter-spacing: 0.22px;
  line-height: 24px;
  margin-bottom: 5px;
`;

export const MovieYear = styled.p`
  ${commonText}

  font-size: 16px;
  letter-spacing: 0.17px;
  line-height: 19px;
`;
