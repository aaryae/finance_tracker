import { DollarSign, Eye, ShoppingBag } from "lucide-react";
import { useState } from "react";

const stats = [
  {
    label: "Total profit",
    value: "$82,373.21",
    change: "+3.4%",
    changeType: "increase",
    icon: <DollarSign size={20} color="black" />,
  },
  {
    label: "Total order",
    value: "7,234",
    change: "-2.8%",
    changeType: "decrease",
    icon: <ShoppingBag size={20} color="black" />,
  },
  {
    label: "Impression",
    value: "3.1M",
    change: "+4.6%",
    changeType: "increase",
    icon: <Eye size={20} color="black" />,
  },
];

const DashboardStats = () => {
  const [selected, setSelected] = useState("Total profit");

  return (
    <div className="flex gap-4 w-full bg-[#1e1e1e] p-4 rounded-xl">
      {stats.map((stat) => {
        const isSelected = selected === stat.label;
        return (
          <div
            key={stat.label}
            onClick={() => setSelected(stat.label)}
            className={`flex flex-1 cursor-pointer items-center justify-between p-4 rounded-xl transition-all duration-300 ${
              isSelected
                ? "bg-[#070707] text-white"
                : "bg-transparent text-gray-300"
            }`}
          >
            <div>
              <p className="text-sm font-medium">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p
                className={`text-sm ${
                  stat.changeType === "increase"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change} from last month
              </p>
            </div>
            <div className="p-2 rounded-full bg-opacity-30 bg-white">
              {stat.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
