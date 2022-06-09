import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='navbar'>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/testpage'}>TestPage</Link>
      <Link href={'/somerandompage'}>SomeRandomPage</Link>
    </header>
  );
};

export default Header;
