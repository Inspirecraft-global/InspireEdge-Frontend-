'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white px-2 py-1 rounded shadow text-sm">
        {payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

const ReusableBarChart = ({
  data,
  dataKey = 'value',
  barColor = '#DCFC36',
  height = 400,
  formatter,
}) => {
  return (
    <div className={`w-full h-[${height}px] pt-12`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={
              formatter ||
              ((value) => (value >= 1000 ? `${value / 1000}k` : value))
            }
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'transparent' }}
          />
          <Bar dataKey={dataKey} radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReusableBarChart;
