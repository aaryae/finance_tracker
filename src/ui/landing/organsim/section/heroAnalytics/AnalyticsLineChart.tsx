// ✅ File: AnalyticsLineChart.tsx
import { useEffect, useState } from "react";
import DashboardStats from "@ui/landing/molecule/DashboardStats";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import axios from "axios";

const AnalyticsLineChart = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [profit, setProfit] = useState(0);
  const [incomeEntries, setIncomeEntries] = useState<any[]>([]);
  const [expenseEntries, setExpenseEntries] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState("Total Income");

  const token = localStorage.getItem("accessToken");
  const userId =localStorage.getItem("userId")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [incomeRes, expenseRes] = await Promise.all([
          axios.get(`http://localhost:8080/api/income/getAllIncome/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`http://localhost:8080/api/expenses/getAllExpenses/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setIncomeEntries(incomeRes.data);
        setExpenseEntries(expenseRes.data);

        const totalIncome = incomeRes.data.reduce((sum: number, e: any) => sum + e.amount, 0);
        const totalExpense = expenseRes.data.reduce((sum: number, e: any) => sum + e.amount, 0);
        setIncome(totalIncome);
        setExpense(totalExpense);
        setProfit(totalIncome - totalExpense);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      }
    };

    fetchData();
  }, [token, userId]);

  let graphData: { name: string; data: number }[] = [];

  if (selectedType === "Total Income") {
    graphData = incomeEntries.map((entry, i) => ({
      name: entry.remark || `Income ${i + 1}`,
      data: entry.amount,
    }));
  } else if (selectedType === "Total Expenses") {
    graphData = expenseEntries.map((entry, i) => ({
      name: entry.remark || `Expense ${i + 1}`,
      data: entry.amount,
    }));
  } else if (selectedType === "Profit") {
    graphData = incomeEntries.map((entry, i) => {
      const match = expenseEntries.find((e) => e.remark === entry.remark);
      const profit = entry.amount - (match?.amount || 0);
      return {
        name: entry.remark || `Entry ${i + 1}`,
        data: profit,
      };
    });
  }

  return (
    <div className="max-w-4xl w-full mx-3 bg-[#262626] rounded-3xl overflow-hidden">
      <div className="bg-[#262626] w-full flex justify-between text-4xl text-[#ffffffb4] px-6">
        <h1 className="text-3xl p-2 tracking-wide capitalize">overview</h1>
      </div>
      <div className="bg-[#262626] text-white flex gap-4 px-5 py-2">
        <DashboardStats
          income={income}
          expense={expense}
          profit={profit}
          selected={selectedType}
          onSelect={setSelectedType}
        />
      </div>
      <div className="py-4 px-6 bg-[#262626]">
        <ResponsiveContainer height={300}>
          <LineChart data={graphData}>
            <CartesianGrid stroke="#444" horizontal={true} vertical={false} />
            <XAxis dataKey="name" stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", border: "none" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend wrapperStyle={{ color: "#ccc" }} />
            <Line
              type="monotone"
              dataKey="data"
              stroke="#4b5bd1"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsLineChart;