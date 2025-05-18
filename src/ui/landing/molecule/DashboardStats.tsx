import { DollarSign, Eye, ShoppingBag } from "lucide-react";

interface Props {
  income: number;
  expense: number;
  profit: number;
  selected: string;
  onSelect: (type: string) => void;
}

const DashboardStats: React.FC<Props> = ({ income, expense, profit, selected, onSelect }) => {
  const stats = [
    {
      label: "Total Income",
      value: `$${income.toLocaleString()}`,
      icon: <DollarSign size={20} color="black" />,
    },
    {
      label: "Total Expenses",
      value: `$${expense.toLocaleString()}`,
      icon: <ShoppingBag size={20} color="black" />,
    },
    {
      label: "Remaining Balance",
      value: `$${profit.toLocaleString()}`,
      icon: <Eye size={20} color="black" />,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 w-full bg-[#404040] p-4 rounded-xl">
      {stats.map((stat) => {
        const isSelected = selected === stat.label;
        return (
          <div
            key={stat.label}
            onClick={() => onSelect(stat.label)}
            className={`flex flex-1 cursor-pointer items-center justify-between p-4 rounded-xl transition-all duration-300 ${
              isSelected ? "bg-[#171717] text-white" : "bg-[#404040] text-gray-300"
            }`}
          >
            <div>
              <p className="text-sm py-1 font-medium">{stat.label}</p>
              <p className="text-2xl py-1 font-bold">{stat.value}</p>
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
