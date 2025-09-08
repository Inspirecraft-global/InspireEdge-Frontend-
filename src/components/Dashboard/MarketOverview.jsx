import React, { useMemo } from 'react';
import ContentCards from '../cards/ContentCards';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function MarketOverview({ data }) {
  const chartData = data?.priceTrends?.chartData;

  const formattedData = useMemo(() => {
    if (!chartData) return [];
    return chartData.labels.map((label, index) => {
      const row = { name: label };

      chartData.datasets.forEach((dataset) => {
        row[dataset.name] = dataset.data[index];
      });

      return row;
    });
  }, [chartData]);

  if (!formattedData.length) {
    return (
      <ContentCards>
        <p className="text-sm text-gray-400">No chart data available</p>
      </ContentCards>
    );
  }

  return (
    <ContentCards>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
          <select className="focus:outline-none">
            {data?.priceTrends?.products?.map((p) => (
              <option key={p.id}>{p.name}</option>
            ))}
          </select>
          <div className="flex gap-3">
            <span className="bg-lemon-100 text-xs flex justify-center items-center text-black-100 px-2 rounded-md">
              Last {chartData.timeRange}
            </span>
            <span className="border px-2 text-xs flex justify-center items-center text-black-100 rounded-md border-[#F1F1F1]">
              This month
            </span>
            <span className="border px-2 text-xs flex justify-center items-center text-black-100 rounded-md border-[#F1F1F1]">
              Year
            </span>
          </div>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={formattedData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                {chartData.datasets.map((dataset, idx) => (
                  <linearGradient
                    key={idx}
                    id={`color-${dataset.name.replace(/\s+/g, '')}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={dataset.color}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={dataset.color}
                      stopOpacity={0}
                    />
                  </linearGradient>
                ))}
              </defs>

              <XAxis dataKey="name" stroke="#A2A3A5" />
              <YAxis />
              <CartesianGrid vertical={false} horizontal={true} />
              <Tooltip />

              {chartData.datasets.map((dataset, idx) => (
                <Area
                  key={idx}
                  type="monotone"
                  dataKey={dataset.name}
                  stroke={dataset.color}
                  fillOpacity={1}
                  fill={`url(#color-${dataset.name.replace(/\s+/g, '')})`}
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ContentCards>
  );
}
