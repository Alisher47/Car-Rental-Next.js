"use client";

import DetailsRental from "./rentail-details/page";
import TopCarRentals from "./top-car-rentals/page";
import RecentTransaction from "./recent-transaction/page";

const Dashboard = () => {
  return (
    <div className="w-full">
      {/* Flex container to align items side by side */}
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        {/* Left section */}
        <div className="flex-1 xl:max-w-[534px] w-full">
          <DetailsRental />
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-6 flex-1 w-full">
          <TopCarRentals />
          <RecentTransaction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;