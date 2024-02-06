'use client';
import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar/Searchbar';
import { Character, ResponseMarvel } from '@/app/types/marvelResponse';
import Card from '../card/Card';
import { useSearchParams } from 'next/navigation';
import { HASH, marvelAPI, publicKey } from '@/app/utils/api';
import PaginationController from '../PaginationController/PaginationController';
import { getAgents } from '@/app/login/agents/page';
import LoadingCard from '../loadingCard/LoadingCard';

// import { Container } from './styles';
const searchAgent = async (name: string) => {
  const { data } = await marvelAPI.get<ResponseMarvel>('/characters', {
    params: {
      ts: 1,
      hash: HASH,
      apikey: publicKey,
      name,
    },
  });
  return data.data.results;
};
const ResultContainer: React.FC<{ agents: Character[]; total: number }> = ({
  agents,
  total,
}) => {
  const searchParams = useSearchParams();
  const [searchedAgent, setSearchedAgent] = useState<Character[]>([]);
  const [newAgents, setNewAgents] = useState<Character[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getAgent = async (term: string) => {
    setIsLoading(true);
    const result = await searchAgent(term);
    if (result.length) {
      setSearchedAgent(result);
      setNoResults(false);
    } else {
      setNoResults(true);
    }
    setIsLoading(false);
  };
  const fetchNewAgents = async () => {
    setIsLoading(true);
    const response = await getAgents(
      10,
      Number(searchParams.get('page')) * 10 - 10
    );
    if (response?.results.length) {
      setNewAgents(response.results);
      setNoResults(false);
    } else {
      setNoResults(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchParams.get('name')) {
      getAgent(searchParams.get('name') ?? '');
    }
    if (searchParams.get('page')) {
      fetchNewAgents();
    } else {
      setNewAgents([]);
    }
  }, [searchParams]);

  return (
    <main className={`${searchedAgent.length == 1 ? '' : 'flex-grow'}`}>
      <SearchBar
        setSearchedAgent={setSearchedAgent}
        setNoResults={setNoResults}
      />
      <div className="flex gap-x-[10px] gap-y-[10px] flex-wrap px-[20px] containerCard self-baseline">
        {isLoading ? (
          Array(10)
            .fill(1)
            .map((item, i) => <LoadingCard key={i} />)
        ) : noResults ? (
          <p className="text-center text-primary-800 w-full">
            Agente não encontrado :(
          </p>
        ) : searchedAgent.length ? (
          searchedAgent.map((agent) => <Card key={agent.id} {...agent} />)
        ) : newAgents.length ? (
          newAgents?.map((agent) => <Card key={agent.id} {...agent} />)
        ) : (
          agents?.map((agent) => <Card key={agent.id} {...agent} />)
        )}
      </div>
      <PaginationController total={total} />
    </main>
  );
};

export default ResultContainer;
