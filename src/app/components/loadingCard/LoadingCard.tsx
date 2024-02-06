import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingCard: React.FC = () => {
  return (
    <div className="flex gap-x-2 p-4 bg-gray-50 self-baseline rounded-[15px] basis-[260px] flex-grow h-[150px]">
      <div className="w-[83px]">
        <Skeleton width={83} height={120} />
      </div>
      <div className="w-full">
        <Skeleton />
        <Skeleton count={3} className="mt-2" />
      </div>
    </div>
  );
};

export default LoadingCard;
