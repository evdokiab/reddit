import styled from 'styled-components';

export const Wrapper = styled.button`
  color: white;
  background-color: rgb(0, 121, 211);
  :hover {
    background-color: #7fbce9;
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
    background-color: #7fbce9;
    cursor: default;
  }
`;
