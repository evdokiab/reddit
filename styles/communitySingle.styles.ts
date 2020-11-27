import styled from 'styled-components';

import { basic } from '../modules/colors';

export const AppWrapper = styled.div`
  background-color: ${basic};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;
