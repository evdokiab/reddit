import styled from 'styled-components';

import media from '../../modules/media';

export const Menu = styled.div`
  display: ${(props) => (!props.hide ? 'flex' : 'none')};
  flex-direction: column;

  height: 100%;
  z-index: 2;
  background-color: #36474f;

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
  color: white;
  cursor: pointer;
  padding: 20px;
  display: flex;
  border-bottom: 2px solid #42535b;
  ${(props) => props.active && 'border-left: 3px solid #add8e6;'}

  &:hover {
    background-color: gray;
  }
`;

export const ActiveBorder = styled.div`
  width: 3px;
  height: 56px;
  background-color: #add8e6;
`;

export const Wrapper = styled.div``;
