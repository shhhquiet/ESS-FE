import React from "react";
import MaterialTable from "material-table";

import {LineChart, Line, CartesianGrid, XAxis, YAxis, Area, AreaChart} from "recharts";
const data = [
  {
    clientname: "Susan Apple",
    name: "Sara",
    age: 12,
    birthday: "05/06/03",
    gender: "F",
  },
  {
    clientname: "Susan Apple",
    name: "Henry",
    age: 8,
    birthday: "05/06/07",
    gender: "M",
  },
];

const Students = () => {
  return (
    <div >

    <MaterialTable
          columns={[
            {title: "Client Name", field: "clientname"},
            {title: "Student Name", field: "name"},
            {title: "Age", field: "age", type: "numeric"},
            {title: "Gender", field: "gender"},
          ]}
          data={data}
          title='Waiting List'
        />
        </div>
  );
};

export default Students;
