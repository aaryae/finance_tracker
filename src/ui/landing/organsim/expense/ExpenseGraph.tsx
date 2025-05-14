// src/components/ExpenseGraph.tsx
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ExpenseEntry {
  id: number;
  remark: string;
  amount: number;
  receiverId: number;
}

interface Props {
  data: ExpenseEntry[];
}

const ExpenseGraph: React.FC<Props> = ({ data }) => {
  const chartData = data.map((entry, index) => ({
    name: entry.remark || `Expense ${index + 1}`,
    uv: entry.amount,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#FF6B6B" fill="#FF3D3D" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseGraph;
