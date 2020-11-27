import styled from 'styled-components';

import {
  babyblue,
  darkGray,
  hoverSidebar,
  lightGrayBorder,
  white
} from '../../modules/colors';
import media from '../../modules/media';
export const Menu = styled.div`
  display: ${(props) => (!props.hide ? 'flex' : 'none')};
  flex-direction: column;

  height: 100%;
  z-index: 2;
  background-color: ${darkGray};

  position: fixed;
  flex-direction: column;
  width: 200px;
  top: 48px;
  left: 0;
  padding: 0;

  ${media.tablet} {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const MenuItem = styled.div`
  font-size: 16px;
  color: ${white};
  cursor: pointer;
  padding: 20px;
  display: flex;
  border-bottom: 2px solid ${lightGrayBorder};
  ${(props) => props.active && `border-left: 3px solid ${babyblue};`}

  &:hover {
    background-color: ${hoverSidebar};
  }
`;

export const ActiveBorder = styled.div`
  width: 3px;
  height: 56px;
  background-color: ${babyblue};
`;

export const Wrapper = styled.div``;
