import { Character } from '@/app/types/marvelResponse';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const Card: React.FC<Character> = ({ thumbnail, name, description, id }) => {
  return (
    <Link
      href={`/agents/${id}`}
      className="card basis-[260px] flex-grow h-[150px] p-4 flex bg-gray-100 rounded-[15px] gap-x-2 hover:scale-105 transition overflow-hidden"
    >
      <div className="w-[83px] h-full shrink-0">
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          width={83}
          height={120}
          className="rounded-xl h-full object-cover"
        />
      </div>
      <div className="md:max-w-[140px]">
        <strong>
          <p>{name}</p>
        </strong>
        <p className="md:max-w-[140px] text-[12px]">
          {description
            ? description.substring(0, 130)
            : 'no description avaiable'}
        </p>
      </div>
    </Link>
  );
};

export default Card;
