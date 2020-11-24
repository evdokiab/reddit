import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Menu, MenuItem } from './Sidebar.styles';

const links = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Add Community',
    url: '/addCommunity'
  }
];

export const Sidebar = ({
  isMenuOpen
}: {
  isMenuOpen: boolean;
}): JSX.Element => {
  const [activeUrl, setActiveUrl] = useState('');

  useEffect(() => {
    setActiveUrl('/' + window.location.href.split('/')[3]);
  });

  return (
    <Menu hide={!isMenuOpen}>
      {links.map((link) => (
        <Link href={link.url} key={link.url}>
          <MenuItem
            active={link.url === activeUrl}
            key={link.url}
            suppressHydrationWarning
          >
            {link.title}
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
};
