import { GlobalStyle } from '../../styles/index.styles';
import { HeadTitle, HeadWrapper } from '../header/Header.styles';

export const Header = (): JSX.Element => {
  return (
    <HeadWrapper>
      <GlobalStyle />
      <HeadTitle>Reddit</HeadTitle>
    </HeadWrapper>
  );
};
