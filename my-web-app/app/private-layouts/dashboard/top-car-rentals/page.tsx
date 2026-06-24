"use client";

import { CarRentalData } from "../dummyData";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#002B5B", "#00A9FF", "#144272", "#AAC4FF", "#B1D0E0"];
const data = CarRentalData

const total = data.reduce((acc, item) => acc + item.value, 0);

const TopCarRentals = () => {
  return (
    <div className="w-full h-auto min-h-[324px] bg-white dark:bg-neutral-900 rounded-[16px] p-[24px] flex flex-col gap-[24px] text-[#1E1E1E] dark:text-gray-100 font-sans shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 dark:border-neutral-800">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="text-[20px] font-bold">Top 5 Car Rental</div>
        <div className="text-[20px] font-bold text-gray-400 cursor-pointer">⋯</div>
      </div>

      {/* Content */}
      <div className="flex flex-row justify-between items-center h-full">
        {/* Donut Chart */}
        <div className="relative w-[160px] h-[160px]">
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          {/* Center Label */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-[20px] font-bold">{total.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Rental Car</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4 text-sm">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between w-[200px]">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></span>
                <span>{item.name}</span>
              </div>
              <span className="font-semibold">{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCarRentals;
