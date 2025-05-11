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
  { name: "Jan", data: 0 },
  { name: "Feb", data: 300 },
  { name: "Mar", data: 200 },
  { name: "Apr", data: 278 },
  { name: "May", data: 189 },
  { name: "jun", data: 30 },
  { name: "jul", data: 89 },
  { name: "Aug", data: 18 },
  { name: "Sep", data: 289 },
  { name: "Oct", data: 389 },
  { name: "Nov", data: 199 },
  { name: "Nov", data: 199 },
];

const AnalyticsLineChart = () => (
  <>
    <div className="max-w-4xl w-full mx-3  bg-[#262626] rounded-3xl overflow-hidden   ">
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
              dataKey="data"
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
