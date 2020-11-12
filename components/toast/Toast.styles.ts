import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 130px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) =>
    props.type === 'success' ? '#22A565' : 'red'};
`;
