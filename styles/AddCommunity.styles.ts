import styled from 'styled-components';

import { basic, red } from '../modules/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  display: block;
  width: 173px;
  border: 1px solid;
`;
export const Label = styled.label`
  margin: 4px;
`;
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

export const ValidationError = styled.div`
  color: ${red};
  font-size: 12px;
`;
