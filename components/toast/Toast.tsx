import { Wrapper } from './Toast.styles';

interface ToastProps {
  type: string;
  text: string;
}

export const Toast = ({ type, text }: ToastProps): JSX.Element => (
  <Wrapper type={type} text={text}>
    {text}
  </Wrapper>
);
