import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const lineData = [
  { month: "Jan", emissions: 1950, offset: 1000 },
  { month: "Feb", emissions: 2100, offset: 1300 },
  { month: "Mar", emissions: 2300, offset: 1200 },
];

const pieData = [
  { name: "Transportation", value: 40 },
  { name: "Electricity", value: 35 },
  { name: "Others", value: 25 },
];

export default function ChartSection() {
  return (
    <div className="charts">
      <div className="chart-box">
        <h4>Emissions Trend</h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="emissions" stroke="#3cb371" />
            <Line type="monotone" dataKey="offset" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h4>Emissions by Category</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80} label>
              <Cell fill="#00C49F" />
              <Cell fill="#0088FE" />
              <Cell fill="#FFBB28" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
