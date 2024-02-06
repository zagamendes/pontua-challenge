import Image from 'next/image';
import Header from '../components/header/Header';

export default function LayoutLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary-800 w-full min-h-screen ">
      <Header />
      <main className="flex flex-col justify-center items-center  sm:flex md:flex-row sm:h-[470px] sm:gap-x-[100px]">
        <div className="max-w-[400px] mb-4 sm:mb-0 md:w-[614px] md:max-w-[614px] sm:h-[467px]">
          <Image
            src={'/building.svg'}
            alt="building"
            width={614}
            height={467}
          />
        </div>
        {children}
      </main>
    </div>
  );
}
