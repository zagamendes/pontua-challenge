'use client';
import { Character } from '@/app/types/marvelResponse';
import Image from 'next/image';
import React, {
  MouseEvent,
  PointerEventHandler,
  useEffect,
  useState,
} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { KeyboardArrowDown, Person } from '@mui/icons-material';
import Link from 'next/link';
// import { Container } from './styles';
const DropdownAgents: React.FC<{ agents: Character[] }> = ({ agents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [selectedAgent, setSelectedAgent] = useState({
    name: '',
    path: '',
    extension: '',
    id: '',
  });

  const handleClickOutside = (e: any) => {
    if (isOpen && e.target.id != 'agent-input') setIsOpen(false);
  };
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [selectedAgent]);

  return (
    <div className=" py-6 max-w-[380px] rounded-[28px] self-auto sm:mt-4 bg-white px-8 md:self-stretch">
      <strong className="text-primary-800 text-4xl">
        Selecione o seu agente mais legal
        <span className="text-active-500">.</span>
      </strong>
      <p className="text-gray-500 my-4">
        Tenha a visão completa do seu agente.
      </p>
      <div id="select" className="w-[320px] flex flex-col gap-y-4">
        <div id="agent-select" className="relative">
          <input
            type="checkbox"
            name="agent"
            id="agent-input"
            onChange={() => setIsOpen(!isOpen)}
            checked={isOpen}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="select-button border h-[44px] border-gray-300 flex items-center justify-between rounded px-3">
            <div className="selected-value text-gray-500">
              {selectedAgent.name ? (
                <div className="flex gap-x-2">
                  <Image
                    alt={selectedAgent.name}
                    src={`${selectedAgent.path}.${selectedAgent.extension}`}
                    width={24}
                    height={24}
                    className="rounded-full cursor-pointer"
                  />
                  <span className="cursor-pointer">{selectedAgent.name}</span>
                </div>
              ) : (
                <div>
                  <Person /> selecione seu agente
                </div>
              )}
            </div>
            <div className="icon-toggle text-gray-300">
              <KeyboardArrowUpIcon
                className={`${isOpen ? 'block' : 'hidden'}`}
              />

              <KeyboardArrowDown
                className={`${!isOpen ? 'block' : 'hidden'}`}
              />
            </div>
          </div>
        </div>
        <ul
          className={`max-h-[120px] overflow-y-scroll agents ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {agents.map(({ name, thumbnail: { extension, path }, id }) => (
            <li
              key={id}
              className="flex items-center relative gap-x-2 h-[44px] hover:bg-gray-50"
            >
              <input
                type="radio"
                name="agent"
                value={name}
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={() =>
                  setSelectedAgent({
                    name,
                    extension,
                    path,
                    id,
                  })
                }
              />
              <Image
                alt={name}
                src={`${path}.${extension}`}
                width={24}
                height={24}
                className="rounded-full cursor-pointer"
              />
              <span className="cursor-pointer">{name}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/agents/${selectedAgent.id}`}
          onClick={() => setClicked(true)}
          role="button"
          className={`rounded-[7px] h-[48px]  flex font-bold text-white self-end w-[88px] justify-center items-center gap-y-4 ${
            clicked
              ? 'bg-disabled cursor-wait'
              : 'bg-primary-800 hover:bg-primary-500'
          }`}
        >
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default DropdownAgents;
