import { Wrapper } from './Button.styles';

interface ButtonProps {
  /**
   * The code to call on button click
   */
  action?: () => void;
  /**
   * The button text
   */
  text: string;
  /**
   * The button title (appears on hover after a couple seconds)
   */
  title?: string;
  /**
   * The button disabled
   */
  disabled?: boolean;
}

const Button = ({
  text,
  action,
  title,
  disabled
}: ButtonProps): JSX.Element => (
  <Wrapper type="button" title={title} onClick={action} disabled={disabled}>
    {text}
  </Wrapper>
);

export default Button;
