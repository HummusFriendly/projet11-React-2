import "./ScoreChart.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const COLORS = ["#FF0000", "#FBFBFB"];

export type ScoreChartType = { value: number }[];

interface ScoreChartProps {
  data: ScoreChartType;
}

const ScoreChart = ({ data }: ScoreChartProps) => {
  console.log(data, 'data')
  const scorePercentage = data[0]?.value || 0; 

  return (
    <div className="container-score">
      <div className="title">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="90%"
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            <Label
              value={`${scorePercentage.toFixed(0)}%`}
              position="center"
              className="chart-label"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-text">
        <span>de votre objectif</span>
      </div>
    </div>
  );
};

export default ScoreChart;
