import React from 'react';
import { PieChart, Pie, Tooltip ,Cell,Legend, ResponsiveContainer } from "recharts";



const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const ITOSeriesChart = () => {
    return (
      <div className="card">
        <div className="card-header">
          <h3>ITOSERIES</h3>
        </div>
        <div className="card-block">
          <ResponsiveContainer
            minWidth={400}
            width={"100%"}
            minHeight={300}
            height={"100%"}
          >
            <PieChart
              align="center"
              margin={{ top: 50, right: 0, bottom: 0, left: 160 }}
              data={data02}
            >
              <Pie
                data={data02}
                dataKey="value"
                cx={200 / 2}
                cy={200 / 2}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              >
                {data02.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
}
 
export default ITOSeriesChart;