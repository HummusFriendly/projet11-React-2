import './PerfChart.css';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

export type PerfChartType = { value: number; kind: string }[];

interface PerfChartProps {
  data: PerfChartType;
}

const PerfChart = ({ data }: PerfChartProps) => {
  console.log(data);
  
  // Décaler les valeurs de 3 positions
  const rotatedData = [...data.slice(3), ...data.slice(0, 3)];

  return (
    <div className='container-perf' style={{ backgroundColor: '#282D30', padding: '10px' }}>
      <ResponsiveContainer>
        <RadarChart outerRadius="65%" data={rotatedData} startAngle={30} endAngle={390}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, dy: 5 }} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerfChart;
