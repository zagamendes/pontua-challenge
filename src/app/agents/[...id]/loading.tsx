import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingAgent: React.FC = () => {
  return (
    <main className="p-5 flex-grow  ">
      <div className="relative h-[60px] py-[23px] pl-[23px] w-full"></div>
      <div className="text-[24px]">
        <Skeleton />
      </div>
      <ul className="flex gap-x-5">
        <li
          className={`text-primary-600 border-b-[2px] border-primary-600`}
          role="button"
        >
          Visão geral
        </li>
        <li className={`text-gray-500 hover:text-primary-600`} role="button">
          Comics
        </li>
        <li className={`'text-gray-500 hover:text-primary-600`} role="button">
          Stories
        </li>
      </ul>
      <div>
        <div
          className={`gap-x-4 shadow-tabshadow bg-white rounded-3xl p-6  mt-7 flex`}
        >
          <Skeleton width={120} height={120} circle={true} />

          <div className="w-full">
            <strong className="text-[24px] text-primary-600">
              <Skeleton />
            </strong>
            <p className="text-gray-tabText font-semibold">
              <Skeleton count={5} />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoadingAgent;
