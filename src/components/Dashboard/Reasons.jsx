'use client';
import React, { PureComponent, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import ContentCards from '../cards/ContentCards';
import Progressbar from './Progressbar';
import ReusablePieChart from '../Charts/ReusablePieChart';

const chartdata = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

export default function Reasons({ data }) {
  const pieChartData = useMemo(() => {
    const devices = data?.overview?.abandonmentByDevice || {};
    return Object.keys(devices)
      .filter((key) => key !== 'insights')
      .map((key) => ({
        name: devices[key].label,
        value: devices[key].value,
      }));
  }, [data]);
  return (
    <ContentCards>
      <div className="flex flex-col md:flex-row gap-6 md:gap-3 w-full h-full">
        <div className="flex-1 flex flex-col gap-4 justify-between min-h-[200px]">
          <h3 className="text-base font-medium text-black-100">
            Top abandonment reasons
          </h3>
          {data?.overview?.topAbandonmentReasons.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex justify-between text-sm">
                <h3 className="text-[#00000099]">{item.reason}</h3>
                <p>{item.percentage}%</p>
              </div>
              <Progressbar target={item.percentage} />
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center min-h-[200px]">
          <div className="flex items-center md:items-end flex-col-reverse md:flex-row   gap-5 w-full justify-center">
            <div className="flex md:flex-col flex-row   gap-4">
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4 rounded-full bg-[#191919]"></div>
                <h3 className="text-[#606C82] text-[10px]">Mobile</h3>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4 rounded-full bg-[#70FA29]"></div>
                <h3 className="text-[#606C82] text-[10px]">Tablet</h3>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4 rounded-full bg-[#F5DE8C]"></div>
                <h3 className="text-[#606C82] text-[10px]">Desktop</h3>
              </div>
            </div>
            <div className="chartbox rounded-full">
              <ReusablePieChart
                data={pieChartData}
                colors={['#F5DE8C', '#70FA29', '#3A3A3A']}
                dataKey="value"
                showTooltip={true}
              />
            </div>
          </div>
        </div>
      </div>
    </ContentCards>
  );
}
