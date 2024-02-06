import React from 'react';
import LoadingCard from '../components/loadingCard/LoadingCard';
import SearchBar from '../components/searchBar/Searchbar';

// import { Container } from './styles';

const LoadingAgents: React.FC = () => {
  return (
    <main className={``}>
      <SearchBar />
      <div className="flex gap-x-[10px] gap-y-[10px] flex-wrap px-[20px] containerCard self-baseline">
        {Array(10)
          .fill(1)
          .map((item, i) => (
            <LoadingCard key={i} />
          ))}
      </div>
    </main>
  );
};

export default LoadingAgents;
