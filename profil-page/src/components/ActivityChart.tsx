import './ActivityChart.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export type ActivityChartType =
  { kilogram: number, calories: number, day: number }[];

interface ActivityChartProps {
  data: ActivityChartType;
}

const ActivityChart = ({ data }: ActivityChartProps) => {
  return (
    <div className="container-activity" style={{ backgroundColor: '#FBFBFB', padding: '20px' }}>
      <div className="chart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px', fontWeight: 'bold' }}>
        <span>Activité quotidienne</span>
        <div className="legend" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '10px', height: '10px', backgroundColor: 'black', borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
            Poids (kg)
          </div>
          <div style={{ display: 'flex', alignItems: 'center',}}>
            <span style={{ width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={(tick) => `${tick}`}
          />
          <YAxis yAxisId="kilogram" orientation="left" tick={false} />
          <YAxis yAxisId="calories" orientation="right" tick={false} />
          <Tooltip />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="black"
            name="Poids (kg)"
            radius={[4, 4, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="red"
            name="Calories brûlées (kCal)"
            radius={[4, 4, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
