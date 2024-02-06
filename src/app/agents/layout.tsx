import {
  GridView,
  HomeMaxOutlined,
  Person,
  TurnLeft,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

// import { Container } from './styles';

export default function AgentsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <>{children}</>
    </div>
  );
}
