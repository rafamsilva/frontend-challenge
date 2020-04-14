import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { ReactComponent as MagnifierIcon } from '../../assets/images/icon-magnifier-grey.svg';

export const Container = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  padding: 0 10px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(MagnifierIcon)`
  margin-right: 12px;
`;

export const Input = styled(DebounceInput)`
  border: 0;
  height: 100%;
  font-family: Helvetica;
  color: #0a1014;
  font-size: 16px;
  letter-spacing: 0.17px;
  line-height: 19px;
  outline: none;

  ::placeholder {
    color: #7a8c99;
  }
`;
