import React from 'react';
import { getAgents } from '../login/agents/page';

import ResultContainer from '../components/resultContainer/ResultContainer';
export const revalidate = 120;
const Agents: React.FC<{
  searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
  const agents = await getAgents(10);

  return (
    <ResultContainer
      agents={agents?.results ?? []}
      total={agents?.total ?? 1}
    />
  );
};

export default Agents;
