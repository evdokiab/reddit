import styled from 'styled-components';

import media from '../modules/media';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 40px 20px 12px;
`;
export const Input = styled.input`
  display: flex;
`;
export const Label = styled.label`
  padding: 0px 0px 5px 0px;
`;
export const AppWrapper = styled.div`
  background-color: #dae0e6;
`;
export const Content = styled.div`
  margin: 60px 240px;
  ${media.tablet} {
    margin: 60px;
  }
`;

export const ValidationError = styled.div`
  color: red;
  font-size: 12px;
`;
