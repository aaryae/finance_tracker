import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IncomeEntry } from "@type/income.type";

interface Props {
  data: IncomeEntry[];
}

const IncomeGraph: React.FC<Props> = ({ data }) => {
  // Transform income data to chart format
  const chartData = data.map((entry, index) => ({
    name: `Income ${index + 1}`, // You can also use remark if you prefer
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
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#155DFC" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeGraph;
