import { Cell, Pie, PieChart } from "recharts";

const RADIAN = Math.PI / 180;

const data = [
  { name: "A", value: 80, color: "#ff0000" },
  { name: "B", value: 45, color: "#00ff00" },
  { name: "C", value: 25, color: "#0000ff" },
];

const cx = 150;
const cy = 130;
const iR = 50;
const oR = 100;

const needle = (
  value: number,
  data: { value: number }[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string
) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });

  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="needle"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
    />,
  ];
};

const AnalyticsHighExpense = () => {
  const value = 40;

  return (
    <>
      <div className="w-[330px] h-fit m-2 rounded-3xl bg-[#262626] p-4 text-[#ffffffa9] text-xl">
        "The lesson of history is that you do not get a sustained economic
        recovery as long as the financial system is in crisis.""
        <br />
        <span className="text-sm"> - Ben Bernanke</span>
      </div>
      <br />
      <div className="w-fit h-fit m-2 rounded-3xl bg-[#262626] p-4 ">
        <h1 className="text-white text-lg md:text-xl mb-4 text-center md:text-left">
          Seems like, your expenditure <br className="hidden md:block" /> is
          high on grossaries
        </h1>
        <div className="flex justify-center">
          <PieChart width={300} height={200}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {needle(value, data, cx, cy, iR, oR, "#d0d000")}
          </PieChart>
        </div>
        <div className="flex flex-col items-start mt-4 text-[#ffffffc5] px-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-red-600 w-4 h-4 rounded-sm"></span>
            <span>grossaries</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-green-600 w-4 h-4 rounded-sm"></span>
            <span>girlfriend</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-600 w-4 h-4 rounded-sm"></span>
            <span>clothes</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsHighExpense;
