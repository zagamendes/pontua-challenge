'use client';
import React from 'react';

// import { Container } from './styles';

const Error: React.FC<{ error: Error; reset: () => void }> = ({
  error,
  reset,
}) => {
  return (
    <div className="text-center w-full mt-8 ">
      <p>ocorreu um erro</p>
      <button
        className="border border-primary-500 rounded p-2 self-start"
        onClick={reset}
      >
        Tentar novamente
      </button>
    </div>
  );
};

export default Error;
