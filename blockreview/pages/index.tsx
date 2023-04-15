import {
  ArrowTrendingDownIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { ReactNode } from "react";

const Home: NextPage = () => {
  return (
    <>
      <div className="mt-20 text-center">
        <h1 className="text-7xl">Find Web3 projects you can trust.</h1>
        <h2 className="mt-6 text-xl text-gray-500">
          Browse and write reviews for every Web3 project, ever.
        </h2>

        <div className="mx-auto mt-12 flex w-full max-w-2xl gap-2">
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-5">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              className="flex-1 outline-none placeholder:text-gray-300"
              placeholder="Search any project..."
            ></input>
          </div>

          <button className="w-36 rounded-lg bg-blue-500 py-5 px-10 text-white">
            Search
          </button>
        </div>

        <div className="mt-20 flex w-full justify-center gap-12 bg-blue-50 py-20 px-28">
          <InfoCard title="Trustless" icon={<ShieldCheckIcon />}>
            Completely decentralised to ensure the credibility of reviews. Never
            to be deleted.
          </InfoCard>
          <InfoCard title="Verified Users" icon={<CheckBadgeIcon />}>
            Real users adding real reviews – verified by Polygon’s trustless ID
            system.
          </InfoCard>
          <InfoCard title="Low Gas" icon={<ArrowTrendingDownIcon />}>
            Take advantage of low gas fees with Polygon’s low gas blockchain.
          </InfoCard>
        </div>
      </div>
    </>
  );
};

const InfoCard: React.FC<{
  children?: ReactNode;
  title: ReactNode;
  icon: ReactNode;
}> = ({ title, icon, children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="rounded-full bg-blue-50 p-1">
        <div className="rounded-full bg-blue-100 p-1">
          <div className="h-6 w-6 text-blue-500">{icon}</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-2xl font-medium">{title}</div>
        <div className="text-base text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default Home;
