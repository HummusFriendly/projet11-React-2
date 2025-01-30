import "./ScoreChart.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const COLORS = ["#FF0000", "#FBFBFB"];

export type ScoreChartType = { value: number }[];

interface ScoreChartProps {
  data: ScoreChartType;
}

const ScoreChart = ({ data }: ScoreChartProps) => {
  console.log(data, 'data');
  const scorePercentage = data[0]?.value || 0;
  const formattedData = [
    { value: scorePercentage },
    { value: 100 - scorePercentage }
  ];

  return (
    <div className="container-score">
      <div className="title">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={formattedData}
            innerRadius="62%" 
            outerRadius="70%" 
            dataKey="value"
            startAngle={90}
            endAngle={90 + (360 * scorePercentage) / 100}
          >
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            <Label
              value={`${scorePercentage.toFixed(0)}%`}
              position="center"
              className="chart-label"
            />
            <Label
              value="de votre objectif"
              position="center"
              dy={20} 
              className="chart-subtext"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
