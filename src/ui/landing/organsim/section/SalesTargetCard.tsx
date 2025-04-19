import { useState } from "react";

const SalesTargetCard = () => {
  const [view, setView] = useState("Monthly");
  const percentage = 75;

  return (
    <div className="bg-[#1f1f1f]   text-white p-4  flex justify-between items-center w-[100px] rounded-3xl">
      <div>
        <p className="text-sm text-gray-300 mb-2">Sales target</p>
        <div className="flex items-end gap-1 text-xl font-semibold">
          <span>1.3K</span>
          <span className="text-gray-400 text-base font-normal">
            / 1.8K Units
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">Made this month year</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="bg-[#2a2a2a] text-white text-sm px-2 py-1 rounded-md border border-gray-600"
        >
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>

        {/* Circular Progress */}
        <div className="relative w-12 h-12">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-gray-700"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-green-400"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTargetCard;
