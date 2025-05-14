import axios from 'axios';
import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderActiveShape = (props: { cx: any; cy: any; midAngle: any; innerRadius: any; outerRadius: any; startAngle: any; endAngle: any; fill: any; payload: any; percent: any; value: any; }) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius,
        startAngle, endAngle, fill, payload, percent, value,
    } = props;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector {...{ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill }} />
            <Sector {...{ cx, cy, startAngle, endAngle, innerRadius: outerRadius + 6, outerRadius: outerRadius + 10, fill }} />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text className='text-white' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#fff">
                {`Count: ${value}`}
            </text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(1)}%)`}
            </text>
        </g>
    );
};

const AdminDashboard = () => {
    const [analytics, setAnalytics] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const fetchAnalytics = async () => {
            const token = localStorage.getItem('accessToken');

            try {
                const { data } = await axios.get('http://localhost:9090/api/user/admin/analytics', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                console.log(data)
                setAnalytics(data);
            } catch (error) {
                console.error('Error fetching analytics:', error);

            }
        };

        fetchAnalytics();
    }, []);

    if (!analytics) {
        return <div className="text-white m-10">Loading...</div>;
    }

    const pieData = [
        // { name: 'Total', value: analytics.Total },
        { name: 'Active', value: analytics.Active },
        { name: 'Inactive', value: analytics.Inactive },
        { name: 'Unverified', value: analytics.Unverified },
        { name: 'Deleted', value: analytics.Delete },
    ];

    const stats = [
        // { label: 'Total Users', value: analytics.Total },
        { label: 'Active Users', value: analytics.Active },
        { label: 'Inactive Users', value: analytics.Inactive },
        { label: 'Unverified Users', value: analytics.Unverified },
        { label: 'Deleted Users', value: analytics.Delete },
    ];

    return (
        <div className="text-white p-6">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#1f2937] rounded-xl p-4 shadow-md">
                        <h3 className="text-xl font-semibold">{stat.label}</h3>
                        <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Pie Chart */}
            <div className="bg-[#1f2937] rounded-xl p-6 shadow-md h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={110}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={(_, index) => setActiveIndex(index)}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminDashboard;
