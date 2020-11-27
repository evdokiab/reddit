import styled from 'styled-components';

import { green, lightGray, red, white } from '../../modules/colors';

export const Wrapper = styled.div`
  border: 1px solid ${lightGray};
  border-radius: 3px;
  height: 130px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  background-color: ${(props) =>
    props.type === 'success' ? `${green}` : `${red}`};
`;
