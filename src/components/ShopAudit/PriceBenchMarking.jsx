'use client';
import React from 'react';
import ContentCards from '../cards/ContentCards';
import { usePriceBenchMarkingAuditsQuery } from '@/redux/DashboardApi';
import DashboardSkeleton from '../UI/Skeleton/DashboardSkeleton';

export default function PriceBenchMarking() {
  const { data: benchmarking, isLoading } = usePriceBenchMarkingAuditsQuery();
  return (
    <div className="mt-10 manrope">
      {isLoading ? (
        <div className="flex flex-col w-full">
          <DashboardSkeleton width="100%" height="500px" />
        </div>
      ) : (
        <>
          <ContentCards>
            <div className="flex justify-between manrope items-center">
              <h3 className="text-black manrope text-xl ">
                Price Benchmarking
              </h3>
            </div>
            <div className="mt-10 w-full  overflow-x-auto">
              <table className="min-w-[800px] w-full  border-collapse manrope">
                <thead>
                  <tr className="border-y border-gray-300 bg-gray-50">
                    <th className="text-left p-4 text-[#050505] font-bold">
                      Product
                    </th>
                    <th className="text-left p-4 text-[#050505] font-bold">
                      Your Price
                    </th>
                    <th className="text-left p-4 text-[#050505] font-bold">
                      Market Avg
                    </th>
                    <th className="text-left p-4 text-[#050505] font-bold">
                      Gap %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarking?.priceBenchmarking?.length > 0 ? (
                    benchmarking.priceBenchmarking.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-300 hover:bg-gray-50 transition"
                      >
                        <td className="p-4 text-[#050505]">{item?.title}</td>
                        <td className="p-4 text-[#050505]">
                          {item?.your_price}
                        </td>
                        <td className="p-4 text-[#050505]">
                          {item?.market_avg}
                        </td>
                        <td className="p-4 text-[#050505]">
                          {item?.gap_percent}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="p-4 text-center text-gray-500 italic border-b border-gray-300"
                      >
                        No price benchmarking data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </ContentCards>
        </>
      )}
    </div>
  );
}
