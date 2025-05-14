import { Cell, Pie, PieChart } from "recharts";

const RADIAN = Math.PI / 180;
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
  data.forEach((v) => (total += v.value));
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

interface Props {
  data: {
    remark: string;
    amount: number;
  }[];
}

const AnalyticsHighExpense: React.FC<Props> = ({ data }) => {
  // Group by category
  const grouped: Record<string, number> = {};
  data.forEach((e) => {
    grouped[e.remark] = (grouped[e.remark] || 0) + e.amount;
  });

  // Get top 3 categories
  const sorted = Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const colors = ["#ff0000", "#00ff00", "#0000ff"];

  const chartData = sorted.map(([name, value], index) => ({
    name,
    value,
    color: colors[index],
  }));

  const highestAmount = chartData.length ? chartData[0].value : 0;

  return (
    <>
      <hr />
      <div className="w-full h-fit rounded-3xl p-4">
        <h1 className="text-white text-lg md:text-xl mb-4 flex justify-center items-center text-center">
          Your highest expenditure is on <b className="ml-1">{chartData[0]?.name || "..."}</b>
        </h1>
        <div className="flex justify-center">
          <PieChart width={300} height={200}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={chartData}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {needle(highestAmount, chartData, cx, cy, iR, oR, "#d0d000")}
          </PieChart>
        </div>
        <div className="flex flex-col w-full items-center mt-4 text-[#ffffffc5] px-2">
          {chartData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <span
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="w-full h-fit rounded-3xl p-3 text-[#ffffffa9]">
        "The lesson of history is that you do not get a sustained economic
        recovery as long as the financial system is in crisis."
        <br />
        <span className="text-sm"> - Ben Bernanke</span>
      </div>
    </>
  );
};

export default AnalyticsHighExpense;
