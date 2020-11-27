import styled from 'styled-components';

import { black } from '../../modules/colors';

export const Navigation = styled.a`
  text-decoration: none;
  color: ${black};
  :hover {
    text-decoration: underline;
  }
  padding: 20px 40px 20px 12px;
  display: flex;
`;
