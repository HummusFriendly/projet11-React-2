import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { day: 'Lundi', steps: 3000 },
  { day: 'Mardi', steps: 4500 },
  { day: 'Mercredi', steps: 2000 },
  { day: 'Jeudi', steps: 5000 },
  { day: 'Vendredi', steps: 7000 },
];

const ActivityChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={sampleData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="steps" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
