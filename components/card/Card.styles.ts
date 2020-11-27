import styled from 'styled-components';

import { lightGray } from '../../modules/colors';

export const Wrapper = styled.div`
  background-color: white;
  border: 1px solid ${lightGray};
  border-radius: 3px;
  ${(props) => (props.width ? `width:${props.width}px` : 'width:100%')};
  ${(props) => (props.height ? `height:${props.height}px` : 'height:auto')};
`;

export const Title = styled.h1`
  font-size: 14px;
  padding: 11px 11px 23px 11px;
  font-weight: 700;
`;
