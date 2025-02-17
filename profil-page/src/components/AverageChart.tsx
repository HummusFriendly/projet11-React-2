import './AverageChart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceArea,
} from 'recharts';

export type AverageChartType = { day: number; sessionLength: number }[];

interface AverageChartProps {
  data: AverageChartType;
}

const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const AverageChart = ({ data }: AverageChartProps) => {
  const extendedData = [
    { day: 0, sessionLength: data[0].sessionLength },
    ...data,
    { day: 8, sessionLength: data[data.length - 1].sessionLength },
  ];

  return (
    <div className='container-average'>
      <ResponsiveContainer>
        <LineChart
          data={extendedData}
          margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id="backgroundGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="75%" stopColor="red" />
              <stop offset="75%" stopColor="darkred" />
              <stop offset="100%" stopColor="darkred" />
            </linearGradient>
          </defs>

          <ReferenceArea x1={0} x2={8} y1={0} y2={100} fill="url(#backgroundGradient)" />

          <XAxis
            dataKey="day"
            type="number"
            domain={[0, 8]}
            axisLine={false}
            tickLine={false}
            tickFormatter={(day) => (day >= 1 && day <= 7 ? dayLabels[day - 1] : '')}
            ticks={[1, 2, 3, 4, 5, 6, 7]}
            interval={0}
            tick={{ fill: 'white', fontSize: 14 }}
          />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            strokeLinejoin="round"
            dot={false}
            isAnimationActive={true}
          />
          <ReferenceDot
            x={6}
            y={data.find((d) => d.day === 6)?.sessionLength}
            r={5}
            fill="#FFFFFF"
            stroke="#FFFFFF"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageChart;
