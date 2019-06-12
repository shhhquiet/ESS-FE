import React from "react";

import {LineChart, Line, CartesianGrid, XAxis, YAxis, Area, AreaChart} from "recharts";
const data = [
  {name: "Page A", uv: 100, pv: 2400, amt: 100},
  {name: "Page B", uv: 200, pv: 2400, amt: 2400},
  {name: "Page C", uv: 250, pv: 2400, amt: 2400},
  {name: "Page D", uv: 300, pv: 2400, amt: 2400},
];

const Students = () => {
  return (
    <AreaChart
      width={550}
      height={300}
      data={data}
      margin={{top: 5, right: 20, bottom: 5, left: 0}}
    >
      <Area type='monotone' dataKey='uv' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='name' />
      <YAxis />
    </AreaChart>
  );
};

export default Students;
