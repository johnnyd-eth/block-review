import { Footer } from "@/components/Footer";
import { InfoCard } from "@/components/InfoCard";
import {
  ArrowTrendingDownIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [search, setSearch] = useState<string>('')
  return (
    <div className='flex flex-col'>
    <div className='flex flex-col items-center'>
      <div className="mt-20 text-center max-w-3xl">
        <h1 className="text-7xl">Find Web3 projects you can trust.</h1>
        <h2 className="mt-6 text-xl text-gray-500 font-normal">
          Browse and write reviews for every Web3 project, ever.
        </h2>

        <div className="mx-auto mt-12 flex w-full max-w-2xl gap-3">
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-5">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              className="flex-1 outline-none placeholder:text-gray-400"
              placeholder="Search any project..."
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            ></input>
          </div>

          <Link href={`/p/${search}`}>
            <button 
              className="w-36 rounded-lg bg-swatch-400 hover:bg-swatch-500 py-5 px-10 text-white h-full"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-20 flex w-full justify-center gap-12 bg-swatch-50 py-20 px-28">
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
    <Footer />
    </div>
  );
};

export default Home;
