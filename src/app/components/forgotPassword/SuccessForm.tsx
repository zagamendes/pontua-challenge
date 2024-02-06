import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const SuccessForm: React.FC = () => {
  return (
    <div className="py-6 max-w-[380px] rounded-[28px] self-auto sm:mt-4 bg-white px-8 sm:self-stretch">
      <strong className="text-primary-800 text-4xl ::last">
        Tudo certo<span className="text-active-500">;)</span>
      </strong>
      <p className="text-gray-500 mt-7 mb-4">
        Foi enviado um e-mail para você com instruções de como redefinir a sua
        senha.
      </p>

      <Link
        href={'/login'}
        className="rounded-[7px] h-[57px] bg-primary-600 hover:bg-primary-500 font-bold text-white w-full flex items-center justify-center"
      >
        voltar para o login
      </Link>
    </div>
  );
};

export default SuccessForm;
