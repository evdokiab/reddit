import styled from 'styled-components';

import {
  blue,
  hoverBlue,
  lightGray,
  textGray,
  white
} from '../../modules/colors';

export const Wrapper = styled.button`
  color: ${white};
  background-color: ${blue};
  :hover {
    background-color: ${hoverBlue};
  }
  border-radius: 4px;
  font-size: 12px;
  width: 106px;
  height: 32px;
  border: none;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  :disabled {
    background-color: ${lightGray};
    color: ${textGray};
    cursor: not-allowed;
  }
`;
