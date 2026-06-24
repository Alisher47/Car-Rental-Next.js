import React from "react";
import { Map, nissan } from "@/app/common/index";
import Image from "next/image";

const DetailsRental = () => {
  return (
    <div className="w-full h-auto min-h-[800px] bg-white dark:bg-neutral-900 rounded-[16px] p-[24px] flex flex-col gap-[24px] text-[#1E1E1E] dark:text-gray-100 font-sans shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 dark:border-neutral-800">

      {/* Header */}
      <div className="text-[20px] font-semibold">Details Rental</div>

      {/* Map */}

      <Image src={Map} alt="" />


      {/* Car Info */}
      <div className="flex items-center gap-4">
        <Image src={nissan} alt="Nissan GT-R" className="object-cover" />
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold">Nissan GT – R</span>
          <span className="text-[#8E8E93] text-[14px]">Sport Car</span>
        </div>
        <div className="ml-auto text-[#8E8E93] text-[14px] font-medium">#9761</div>
      </div>

      {/* Pick-Up Section */}
      <div className="flex flex-col gap-2">
        <span className="text-[16px] font-medium text-[#1E1E1E]">Pick - Up</span>
        <div className="grid grid-cols-3 gap-4">
          {/* Location */}
          <div className="flex flex-col">
            <label className="text-[12px] text-[#8E8E93] mb-1">Locations</label>
            <select className="border border-[#E5E5EA] rounded-[8px] px-3 py-2 text-[14px] bg-white text-[#1E1E1E]">
              <option>Kota Semarang</option>
            </select>
          </div>
          {/* Date */}
          <div className="flex flex-col">
            <label className="text-[12px] text-[#8E8E93] mb-1">Date</label>
            <input
              type="text"
              value="20 July 2022"
              readOnly
              className="border border-[#E5E5EA] rounded-[8px] px-3 py-2 text-[14px] bg-white"
            />
          </div>
          {/* Time */}
          <div className="flex flex-col">
            <label className="text-[12px] text-[#8E8E93] mb-1">Time</label>
            <select className="border border-[#E5E5EA] rounded-[8px] px-3 py-2 text-[14px] bg-white text-[#1E1E1E]">
              <option>07.00</option>
            </select>
          </div>
        </div>
      </div>

      {/* Drop-Off Section */}
      <div className="flex flex-col gap-2">
        <span className="text-[16px] font-medium text-[#1E1E1E]">Drop - Off</span>
        <div className="grid grid-cols-3 gap-4">
          {/* Location */}
          <div className="flex flex-col">
            <label className="text-[12px] text-[#8E8E93] mb-1">Locations</label>
            <select className="border border-[#E5E5EA] rounded-[8px] px-3 py-2 text-[14px] bg-white text-[#1E1E1E]">
              <option>Kota Semarang</option>
            </select>
          </div>
          {/* Date */}
          <div className="flex flex-col">
            <label className="text-[12px] text-[#8E8E93] mb-1">Date</label>
            <input
              type="text"
              value="21 July 2022"
              readOnly
              className="border border-[#E5E5EA] rounded-[8px] px-3 py-2 text-[14px] bg-white"
            />
          </div>
          {/* Time */}
          <div className="flex flex-col">
            <label className="text-[12px] text-[#8E8E93] mb-1">Time</label>
            <select className="border border-[#E5E5EA] rounded-[8px] px-3 py-2 text-[14px] bg-white text-[#1E1E1E]">
              <option>01.00</option>
            </select>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E5EA] my-[8px]"></div>

      {/* Total Rental Price */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[14px] text-[#8E8E93]">Total Rental Price</div>
          <div className="text-[12px] text-[#8E8E93]">Overall price and includes rental discount</div>
        </div>
        <div className="text-[24px] font-bold text-[#1E1E1E]">$80.00</div>
      </div>
    </div>
  );
};

export default DetailsRental;
