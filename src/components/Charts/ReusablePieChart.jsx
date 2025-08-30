'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ReusablePieChart = ({
  data = [],
  colors = [],
  dataKey = 'value',
  innerRadius = 60,
  outerRadius = 100,
  width = 240,
  height = 240,
  showTooltip = true,
  showLegend = false,
  paddingAngle = 5,
}) => {
  const handleMouseEnter = (_, index) => {
    // Optional: handle hover effects here
  };

  return (
    <PieChart width={width} height={height} onMouseEnter={handleMouseEnter}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        paddingAngle={paddingAngle}
        dataKey={dataKey}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % colors.length] || '#8884d8'}
          />
        ))}
      </Pie>
      {showTooltip && <Tooltip />}
      {showLegend && <Legend />}
    </PieChart>
  );
};

export default ReusablePieChart;
