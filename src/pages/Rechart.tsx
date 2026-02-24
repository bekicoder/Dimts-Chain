import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample Data (replace with your actual data)
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ExampleLineChart = () => {
  return (
      <div className="w-full bg-amber-100 ml-12">
    // ResponsiveContainer makes the chart adjust to its parent's width and height
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data} // Pass your data to the chart
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" /> {/* Adds a grid to the background */}
        <XAxis dataKey="name" /> {/* Maps the 'name' property of the data to the X-axis */}
        <YAxis /> {/* Automatically generates Y-axis ticks based on data values */}
        <Tooltip /> {/* Shows data details on hover */}
        <Legend /> {/* Provides a legend for the different data lines */}
        {/* Defines the 'uv' line with a specific color and type */}
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* Defines the 'pv' line with a different color and type */}
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default ExampleLineChart;

