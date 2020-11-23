import { GlobalStyle } from '../../styles/index.styles';
import { HeadTitle, HeadWrapper } from '../header/Header.styles';
import { Sidebar } from '../sidebar/Sidebar';

export const Header = (): JSX.Element => {
  return (
    <HeadWrapper>
      <GlobalStyle />
      <HeadTitle>Reddit</HeadTitle>
      <Sidebar />
    </HeadWrapper>
  );
};
