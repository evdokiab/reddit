import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

import { Menu, MenuItem1, MenuItem2, Wrapper } from './Sidebar.styles';

export const Sidebar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setUrl(window.location.href.split('/')[3]);
  };

  return (
    <Wrapper hide={!isMenuOpen}>
      <Hamburger onToggle={handleHamburgerClick} size={25} />

      <Menu hide={!isMenuOpen}>
        <MenuItem1 url={url} onClick={() => setIsMenuOpen(false)}>
          <Link href="/">Home</Link>
        </MenuItem1>

        <MenuItem2 url={url} onClick={() => setIsMenuOpen(false)}>
          <Link href="/addCommunity">Add community</Link>
        </MenuItem2>
      </Menu>
    </Wrapper>
  );
};
