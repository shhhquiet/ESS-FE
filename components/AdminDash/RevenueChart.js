import React from "react";

import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart} from "recharts";
const data = [
  {name: "Jan", revenue: 100, students: 90, amt: 100},
  {name: "Feb", revenue: 200, students: 120, amt: 2400},
  {name: "Mar", revenue: 250, students: 200, amt: 2400},
  {name: "Apr", revenue: 300, students: 220, amt: 2400},
  {name: "May", revenue: 320, students: 230, amt: 2400},
  {name: "Jun", revenue: 340, students: 280, amt: 2400},
];

const Revenue = () => {
  return (
    <AreaChart
      width={550}
      height={300}
      data={data}
      margin={{top: 5, right: 20, bottom: 5, left: 0}}
    >
      <Area type='monotone' dataKey='students' stroke="#82ca9d" />
      <Area type='monotone' dataKey='revenue' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <Tooltip />
      <XAxis dataKey='name' />
      <YAxis />
    </AreaChart>
  );
};

export default Revenue;
