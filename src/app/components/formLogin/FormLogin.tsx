'use client';
import { API } from '@/app/utils/api';
import axios from 'axios';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

// import { Container } from './styles';

const FormLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sent, setSent] = useState(false);
  const [erro, setErro] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setErro('');
      setSent(true);
      await API.post('/auth/login', {
        email,
        senha,
      });
      router.push('/login/agents');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setErro(e.response?.data?.message);
        setSent(false);
      }
      console.log(e);
    }
  };
  return (
    <form
      className="py-6 max-w-[380px] rounded-[28px] max-h-[433px] sm:mt-4 bg-white px-9"
      onSubmit={handleSubmit}
    >
      <strong className="text-primary-800 text-4xl ::last">
        Bem-vindo<span className="text-active-500">.</span>
      </strong>
      <p>informe as suas credenciais de acesso ao portal</p>
      <div>
        <input
          type="email"
          placeholder="douglas@pontua.com.br"
          className="mb-3 rounded-[7px] w-full h-[57px] border outline-primary-500 border-primary-500 pl-4 font-bold text-primary-500"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="informe sua senha"
          className="mb-3 rounded-[7px] sm:w-full w-full h-[57px] border outline-primary-500 border-primary-500 pl-4 font-bold text-primary-500"
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>
      {erro.length != 0 && <p className="text-active-500">{erro}</p>}
      <button
        disabled={sent}
        className={`rounded-[7px] h-[57px]  font-bold text-white w-full ${
          sent ? 'bg-disabled' : ' bg-primary-600 hover:bg-primary-500'
        }`}
      >
        {!sent ? 'entrar' : 'entrando'}
      </button>
      <small>
        <Link
          href={'/login/forgot'}
          className="text-right block text-active-700 mt-5"
        >
          Esqueceu a senha?
        </Link>
      </small>
    </form>
  );
};

export default FormLogin;
