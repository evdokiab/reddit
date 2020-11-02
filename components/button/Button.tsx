import { Wrapper } from './Button.styles';

interface ButtonProps {
  /**
   * The code to call on button click
   */
  action?: () => null;
  /**
   * The button text
   */
  text: string;
  /**
   * The button title (appears on hover after a couple seconds)
   */
  title?: string;
}

const Button = ({ text, action, title }: ButtonProps): JSX.Element => (
  <Wrapper type="button" title={title} onClick={action}>
    {text}
  </Wrapper>
);

export default Button;
