import axios from 'axios';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';

// import { Container } from './styles';

const ForgotPassword: React.FC<{
  setSent: Dispatch<SetStateAction<boolean>>;
}> = ({ setSent }) => {
  const [email, setEmail] = useState('teste@teste.com');

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      /* await axios.post('http://localhost:3000/api/auth/login', {
          email,
          senha,
        }); */
      setSent((prev) => !prev);
    } catch (e) {
      console.log('forgot', e);
    }
  };
  return (
    <form
      className="py-6 max-w-[380px] rounded-[28px] self-auto sm:mt-4 bg-white px-8 sm:self-stretch"
      onSubmit={handleSubmit}
    >
      <strong className="text-primary-800 text-4xl ::last">
        Recuperar senha<span className="text-active-500">.</span>
      </strong>
      <p className="text-gray-500 mt-7 mb-4">
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
        link com as instruções para você redefinir a sua senha.
      </p>
      <div>
        <input
          type="email"
          placeholder="douglas@pontua.com.br"
          className="mb-3 rounded-[7px] w-full h-[57px] border outline-primary-500 border-primary-500 pl-4 font-bold text-primary-500"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <button className="rounded-[7px] h-[57px] bg-disabled  font-bold text-white w-full hover:bg-primary-600">
        enviar link
      </button>
    </form>
  );
};

export default ForgotPassword;
