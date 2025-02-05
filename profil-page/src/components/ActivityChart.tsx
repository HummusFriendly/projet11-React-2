import './ActivityChart.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from 'recharts';

export type ActivityChartType =
  { kilogram: number, calories: number, day: number }[];

interface ActivityChartProps {
  data: ActivityChartType;
}

const ActivityChart = ({ data }: ActivityChartProps) => {
  const dataWithSequentialDays = data.map((item, index) => ({
    ...item,
    day: index + 1,
  }));

  const kilograms = data.map((item) => item.kilogram);
  const minWeight = Math.min(...kilograms);
  const maxWeight = Math.max(...kilograms);
  const aboveMaxWeight = maxWeight + 1;

  return (
    <div className="container-activity" style={{ backgroundColor: '#FBFBFB'}}>
      <div className="chart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px', padding: '10px' }}>
        <span>Activité quotidienne</span>
        <div className="legend" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '10px', height: '10px', backgroundColor: 'black', borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
            Poids (kg)
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          data={dataWithSequentialDays}
          margin={{
            top: 20,
            right: 0,  // Alignement avec la parenthèse ")"
            left: 0,   // Alignement avec la lettre "A"
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickFormatter={(tick) => `${tick}`} />
          <YAxis yAxisId="kilogram" orientation="left" tick={false} domain={[minWeight, aboveMaxWeight]} />
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

          <ReferenceLine y={minWeight} yAxisId="kilogram" strokeDasharray="3 3" stroke="#8884d8">
            <Label value={minWeight} position="right" offset={20} />
          </ReferenceLine>
          <ReferenceLine y={maxWeight} yAxisId="kilogram" strokeDasharray="3 3" stroke="#8884d8">
            <Label value={maxWeight} position="right" offset={20} />
          </ReferenceLine>
          <ReferenceLine y={aboveMaxWeight} yAxisId="kilogram" strokeDasharray="3 3" stroke="#8884d8">
            <Label value={aboveMaxWeight} position="right" offset={20} />
          </ReferenceLine>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;