import './AverageChart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';

export type AverageChartType =
  {day:number,sessionLength:number}[];

interface AverageChartProps {
  data:AverageChartType;
}

const AverageChart = ({data}:AverageChartProps) => {

  return (
    <div className='container-average'>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
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
          {/* Cercle après vendredi */}
          <ReferenceDot
            x="S"
            y={data.find((d) => d.day == 6)?.sessionLength}
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
