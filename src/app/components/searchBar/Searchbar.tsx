'use client';
import { Character, ResponseMarvel } from '@/app/types/marvelResponse';
import { HASH, marvelAPI, publicKey } from '@/app/utils/api';
import { Search } from '@mui/icons-material';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

const SearchBar: React.FC<{
  setSearchedAgent?: Dispatch<SetStateAction<Character[]>>;
  setNoResults?: Dispatch<SetStateAction<boolean>>;
}> = ({ setSearchedAgent, setNoResults }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('name') ?? '');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(pathname + '?' + createQueryString('name', term));
  };

  useEffect(() => {
    if (!term) {
      if (setSearchedAgent && setNoResults) {
        setSearchedAgent([]);
        setNoResults(false);
        router.push(pathname);
      }
    }
  }, [term]);
  return (
    <form
      className="relative h-[60px] py-[23px] pl-[23px] w-full text-primary-200"
      onSubmit={handleSubmit}
    >
      <Search className="absolute" />
      <input
        placeholder="Busque um agente"
        className="pl-7 bg-transparent w-full  outline-0"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
    </form>
  );
};

export default SearchBar;
