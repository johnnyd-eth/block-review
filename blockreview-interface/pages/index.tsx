import { Footer } from "@/components/ui/Footer";
import { InfoCard } from "@/components/_pages/HomePage/InfoCard";
import {
  ArrowTrendingDownIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { SearchInput } from "@/components/_pages/HomePage/SearchInput";
import { PROJECT_DATA } from "@/projectData";

const Home: NextPage = () => {
  const realUsers = "Real users adding real reviews – verifies wallets actively using projects' smart contracts."
  return (
    <div className='flex flex-col items-center'>
      <div className="mt-20 text-center max-w-3xl">
        <h1 className="text-7xl">Find Web3 projects you can trust.</h1>
        <h2 className="mt-6 text-xl text-gray-500 font-normal">
          Browse and write reviews for every Web3 project, ever.
        </h2>

        <SearchInput projectData={PROJECT_DATA} />

      </div>
      <div className="mt-20 flex w-full justify-center gap-12 bg-swatch-50 py-20 px-28">
        <InfoCard title="Trustless" icon={<ShieldCheckIcon />}>
          Reviews directly stored on and retrieved from the Polygon blockchain - no central authority involved. 
        </InfoCard>
        <InfoCard title="Verified Users" icon={<CheckBadgeIcon />}>
          {realUsers}
        </InfoCard>
        <InfoCard title="Low Gas" icon={<ArrowTrendingDownIcon />}>
          Take advantage of low gas fees with Polygon’s low gas blockchain.
        </InfoCard>
      </div>
    </div>
  );
};

export default Home;
