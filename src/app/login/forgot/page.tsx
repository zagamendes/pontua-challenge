'use client';
import ForgotPassword from '@/app/components/forgotPassword/ForgotPassword';
import SuccessForm from '@/app/components/forgotPassword/SuccessForm';
import axios from 'axios';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

// import { Container } from './styles';

const FormLogin: React.FC = () => {
  const [sent, setSent] = useState(false);
  return sent ? <SuccessForm /> : <ForgotPassword setSent={setSent} />;
};

export default FormLogin;
