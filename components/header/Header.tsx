import Hamburger from 'hamburger-react';
import { useState } from 'react';

import { GlobalStyle } from '../../styles/index.styles';
import { HeaderSpacer, HeadTitle, HeadWrapper } from '../header/Header.styles';
import { Sidebar } from '../sidebar/Sidebar';

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeadWrapper>
      <GlobalStyle />
      <Hamburger onToggle={handleHamburgerClick} size={25} />
      <HeadTitle>Reddit</HeadTitle>
      <HeaderSpacer />
      <Sidebar isMenuOpen={isMenuOpen} />
    </HeadWrapper>
  );
};
