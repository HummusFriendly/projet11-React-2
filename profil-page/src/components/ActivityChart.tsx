import './ActivityChart.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export type ActivityChartType =
  {kilogram:number,calories:number,day:number}[];

interface ActivityChartProps {
  data:ActivityChartType;
}

const ActivityChart = ({data}:ActivityChartProps) => {
  return (
    <div className="container-activity">
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
            label={{ value: 'Jour', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="left"
            label={{ value: 'Poids (kg)', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            yAxisId="calories"
            orientation="right"
            label={{ value: 'Calories', angle: -90, position: 'insideRight' }}
          />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#8884d8"
            name="Poids (kg)"
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#82ca9d"
            name="Calories"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
