import React from 'react';
import Link from 'next/link'
import NavStyles from './styles/NavStyles';

const Nav = () => {
  return (
    <NavStyles>
      <Link href="/" prefetch>
        <a>Home</a>
      </Link>
      <Link href="/sell" prefetch>
        <a>Sell</a>
      </Link>
    </NavStyles>
  );
};

export default Nav;