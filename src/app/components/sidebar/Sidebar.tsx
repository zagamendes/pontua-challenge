'use client';
import { GridView, Person, TurnLeft } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const path = usePathname();

  return (
    <div className="min-h-[100vh] self-start sticky top-0 shadow-myshadow  bg-white w-[256px] shrink-0">
      <div className="pl-6 pt-5 pb-4">
        <Image src="/logo-pontua-azul.svg" alt="logo" width="100" height="26" />
      </div>
      <ul className="pl-6 mt-2 pt-4 pb-5 border-t border-b border-divider text-black font-medium">
        <li
          className={`flex items-center gap-x-2 hover:text-active-500 font-medium ${
            path == '/agents' ? 'text-active-500' : ''
          } `}
        >
          <Link href={'/agents'}>
            <GridView /> <span>Home</span>
          </Link>
        </li>

        <li className="flex items-center gap-x-2 mt-4 hover:text-active-500 font-medium">
          <Link href={'/'} className="">
            <Person /> <span>Perfil</span>
          </Link>
        </li>
      </ul>
      <div className="p-6">
        <Link
          href="http://localhost:3000/api/auth/logout"
          className="hover:text-active-500 font-medium"
        >
          <TurnLeft /> Sair
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
