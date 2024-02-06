import Tabs from '@/app/components/Tabs/Tabs';
import { ResponseMarvel } from '@/app/types/marvelResponse';
import { HASH, marvelAPI, publicKey } from '@/app/utils/api';

import React, { FC } from 'react';

// import { Container } from './styles';
interface PageProps {
  params: {
    id: string;
  };
}
const getAgent = async (id: string) => {
  const { data } = await marvelAPI.get<ResponseMarvel>(`/characters/${id}`, {
    params: {
      ts: 1,
      hash: HASH,
      apikey: publicKey,
    },
  });
  return data.data.results[0];
};
const Agent: FC<PageProps> = async ({ params }) => {
  const { id } = params;
  const agent = await getAgent(id);

  return <Tabs agent={agent} />;
};

export default Agent;
