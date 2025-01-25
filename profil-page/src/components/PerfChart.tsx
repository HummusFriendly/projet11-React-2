import './PerfChart.css';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

export type PerfChartType = { value: number; kind: string }[];

interface PerfChartProps {
  data: PerfChartType;
}

const PerfChart = ({ data }: PerfChartProps) => {
  console.log(data)
  return (
    <div className='container-perf'>
      <ResponsiveContainer>
        <RadarChart outerRadius="70%" data={data} startAngle={30} endAngle={390}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis tick={false} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerfChart;
