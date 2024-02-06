'use client';
import { Character } from '@/app/types/marvelResponse';
import Image from 'next/image';
import React, { useState } from 'react';

// import { Container } from './styles';

const Tabs: React.FC<{ agent: Character }> = ({ agent }) => {
  const [toggleTab, setToggleTab] = useState(1);
  return (
    <main className="p-5 flex-grow  ">
      <div className="relative h-[60px] py-[23px] pl-[23px] w-full"></div>
      <div className="text-[24px]">
        <strong className="font-bold text-primary-600">Perfil</strong>
        <span className="text-active-500 font-normal">/</span>
        <span className="text-gray-500 font-normal">{agent.name}</span>
      </div>
      <ul className="flex gap-x-5">
        <li
          className={`${
            toggleTab == 1
              ? 'text-primary-600 border-b-[2px] border-primary-600'
              : 'text-gray-500'
          } hover:text-primary-600`}
          role="button"
          onClick={() => setToggleTab(1)}
        >
          Visão geral
        </li>
        <li
          className={`${
            toggleTab == 2
              ? 'text-primary-600 border-b-[2px] border-primary-600'
              : 'text-gray-500'
          } hover:text-primary-600`}
          role="button"
          onClick={() => setToggleTab(2)}
        >
          Comics
        </li>
        <li
          className={`${
            toggleTab == 3
              ? 'text-primary-600 border-b-[2px] border-primary-600'
              : 'text-gray-500'
          } hover:text-primary-600`}
          role="button"
          onClick={() => setToggleTab(3)}
        >
          Stories
        </li>
      </ul>
      <div>
        <div
          className={`${
            toggleTab == 1 ? 'flex' : 'hidden'
          } gap-x-4 shadow-tabshadow bg-white rounded-3xl p-6  mt-7`}
        >
          <Image
            width={120}
            height={120}
            alt={agent.name}
            src={`${agent.thumbnail.path}.${agent.thumbnail.extension}`}
            className="rounded-full"
          />
          <div>
            <strong className="text-[24px] text-primary-600">
              {agent.name}
            </strong>
            <p className="text-gray-tabText font-semibold">
              {agent.description}
            </p>
          </div>
        </div>
        <div className={`${toggleTab == 2 ? 'block' : 'hidden'} p-6  mt-7`}>
          <ul className="list-disc text-gray-tabText font-semibold">
            {agent.comics.items.map((comic) => (
              <li key={comic.name}>{comic.name}</li>
            ))}
          </ul>
        </div>
        <div className={`${toggleTab == 3 ? 'block' : 'hidden'} p-6  mt-7`}>
          <ul className="list-disc text-gray-tabText font-semibold">
            {agent.stories.items.map((story) => (
              <li key={story.name}>{story.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Tabs;
