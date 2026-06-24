"use client";

import Image from "next/image";
import { RecentTransactionData } from "../dummyData";

const RecentTransaction = () => {
  return (
    <div className="w-full h-auto min-h-[480px] bg-white dark:bg-neutral-900 rounded-[16px] p-[24px] flex flex-col gap-[24px] text-[#1E1E1E] dark:text-gray-100 font-sans shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 dark:border-neutral-800">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-semibold">Recent Transaction</h2>
        <button className="text-[#5C6BC0] text-sm font-medium cursor-pointer hover:underline">
          View All
        </button>
      </div>

      {/* Transactions List */}
      <div className="flex flex-col gap-6">
        {RecentTransactionData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={48}
                className="object-contain rounded-md"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-[16px]">{item.name}</span>
                <span className="text-sm text-gray-500">{item.class}</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col text-right">
              <span className="text-sm text-gray-400">{item.date}</span>
              <span className="text-[16px] font-semibold text-[#1E1E1E]">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;
