import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <nav className="">
      <Image alt="logo" src={'/logo-pontua.svg'} width={170} height={50} />
    </nav>
  );
};

export default Header;
