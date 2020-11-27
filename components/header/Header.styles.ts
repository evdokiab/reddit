import styled from 'styled-components';

import { white } from '../../modules/colors';

export const HeadWrapper = styled.div`
  background-color: ${white};
  height: 48px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  width: 100%;
  z-index: 3;
`;

export const HeadTitle = styled.div`
  font-size: 16px;
  padding: 18px 6px;
  font-weight: 700;
`;

export const HeaderSpacer = styled.div`
  width: 48px;
  height: 1px;
`;
