'use client';
import { ArrowBack, ArrowForward, ArrowLeftSharp } from '@mui/icons-material';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

// import { Container } from './styles';

const PaginationController: React.FC<{ total: number }> = ({ total }) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') ?? '1');
  const router = useRouter();
  const nextPage = () => {
    router.push(`/agents?page=${page + 1}`);
  };
  const prevPage = () => {
    router.push(`/agents?page=${page - 1 == 0 ? 1 : page - 1}`);
  };
  return (
    <div className="flex justify-center mt-4 gap-x-4">
      <button
        disabled={page == 1}
        onClick={prevPage}
        className={`border p-2 rounded text-primary-500 ${
          page == 1
            ? ''
            : 'cursor-pointer hover:bg-primary-600 hover:text-white'
        } border-gray-100 `}
      >
        <ArrowBack /> Anterior
      </button>

      <button
        disabled={page == total / 10}
        onClick={nextPage}
        className={`border p-2 rounded text-primary-500 ${
          page == total / 10
            ? ''
            : 'cursor-pointer  hover:bg-primary-600 hover:text-white'
        }   border-gray-100`}
      >
        Proximo <ArrowForward />
      </button>
    </div>
  );
};

export default PaginationController;
