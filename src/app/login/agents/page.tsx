import DropdownAgents from '@/app/components/dropdownAgents/DropdownAgents';
import { ResponseMarvel } from '@/app/types/marvelResponse';
import { HASH, marvelAPI, publicKey } from '@/app/utils/api';

export const getAgents = async (limit: number = 18, offset: number = 0) => {
  try {
    const { data } = await marvelAPI.get<ResponseMarvel>('/characters', {
      params: {
        ts: 1,
        hash: HASH,
        apikey: publicKey,
        limit: limit,
        offset,
      },
    });

    return data.data;
  } catch (e) {
    console.log('api', e);
  }
};
const Agents: React.FC = async () => {
  const results = await getAgents(50);

  return <DropdownAgents agents={results?.results ?? []} />;
};

export default Agents;
