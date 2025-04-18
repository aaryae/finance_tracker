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

const data = [
  { name: "Jan", uv: 0 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 200 },
  { name: "Apr", uv: 278 },
  { name: "May", uv: 189 },
  { name: "jun", uv: 30 },
  { name: "jul", uv: 89 },
  { name: "Aug", uv: 18 },
  { name: "Sep", uv: 289 },
  { name: "Oct", uv: 389 },
  { name: "Nov", uv: 199 },
  { name: "Nov", uv: 199 },
];

const AnalyticsLineChart = () => (
  <>
    <div className="max-w-5xl mx-3  bg-[#262626] rounded-3xl overflow-hidden   ">
      <div className="bg-[#262626] w-full flex justify-between text-4xl text-[#ffffffb4] px-6 ">
        <h1 className="text-3xl p-2 tracking-wide capitalize">overview</h1>
      </div>
      <div className="bg-[#262626] text-white  flex gap-4 px-5 py-2">
        <DashboardStats />
      </div>
      <div className="py-4 px-6  bg-[#262626]">
        <ResponsiveContainer height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#444" horizontal={true} vertical={false} />
            <XAxis dataKey="name" stroke="#ccc" />
            {/* <YAxis stroke="#ccc" /> */}
            <Tooltip
              contentStyle={{ backgroundColor: "#333", border: "none" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend wrapperStyle={{ color: "#ccc" }} />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#4b5bd1"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </>
);

export default AnalyticsLineChart;
