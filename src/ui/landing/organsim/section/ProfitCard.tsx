const ProfitCard = () => {
  const total = 22000;
  const current = 15800;
  const percentage = Math.round((current / total) * 100);

  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="card-body bg-[#262626] text-gray-900 dark:text-white p-4 rounded-lg shadow-md w-full ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Sales target</h4>
      </div>

      {/* Bottom Content */}
      <div className="flex items-center justify-between mt-8">
        {/* Stats */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">
            15.8K
            <span className="opacity-60 text-base font-bold">
              {" "}
              / 22.0K Units
            </span>
          </h2>
          <div className="mt-1 text-sm">Made this year</div>
        </div>

        {/* Circular Progress */}
        <div className="relative w-[120px] h-[120px]">
          <svg className="transform -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-gray-500"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              style={{
                strokeDasharray: `${circumference}, ${circumference}`,
                strokeDashoffset: 0,
              }}
            />
            <circle
              className="text-[white]"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              r={radius}
              cx="50"
              cy="50"
              style={{
                strokeDasharray: `${progress}, ${circumference}`,
                strokeDashoffset: 0,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold">{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;
