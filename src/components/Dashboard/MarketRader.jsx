import React from 'react';
import ContentCards from '../cards/ContentCards';
import Thread from '../../../public/icons/Thread';
import { HighTreadIcons, LowTreadIcons } from '@/assets/Icons';

const renderThreat = (level) => {
  switch (level?.toLowerCase()) {
    case 'high':
      return <HighTreadIcons />;
    case 'medium':
      return <LowTreadIcons />;
    case 'low':
      return <Thread />;
    default:
      return '-';
  }
};

export default function MarketRader({ data }) {
  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">
        Market Threat Radar
      </h3>
      <ContentCards>
        <div className="flex flex-col gap-4">
          {/* Filters + Legend */}
          <div className="flex items-center justify-between">
            <div className="w-[150px] border-[1px] py-2 px-3 rounded-sm border-gray-300">
              <select className="focus:outline-none w-full">
                <option>Last 10 hours</option>
                <option>Last 8 hours</option>
                <option>Last 6 hours</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 rounded-[2px] h-3 bg-green-400"></div>
                <p className="text-[#00000099] text-[10px]">low threat</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 rounded-[2px] h-3 bg-yellow-400"></div>
                <p className="text-[#00000099] text-[10px]">medium threat</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 rounded-[2px] h-3 bg-red-400"></div>
                <p className="text-[#00000099] text-[10px]">high threat</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto w-full">
            <table className="min-w-[900px] w-full border rounded-md border-[#F1F1F1] divide-y divide-[#F1F1F1]">
              <thead className="bg-[#F9F9F9] rounded-md">
                <tr className="rounded-md h-[56px]">
                  <th className="p-3 text-left text-sm font-medium text-black-200">
                    Stores
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-black-200">
                    Last 2 hours
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-black-200">
                    Last 4 hours
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-black-200">
                    Last 6 hours
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-black-200">
                    Last 8 hours
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-black-200">
                    Last 10 hours
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F1F1] bg-white">
                {data?.threatRadar?.radar?.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="p-5 font-medium text-black-300">
                      {item.storeName}
                    </td>
                    <td className="p-5 font-medium text-black-300">
                      {renderThreat(item.timeSlots.last2Hours.threatLevel)}
                    </td>
                    <td className="p-5 font-medium text-black-300">
                      {renderThreat(item.timeSlots.last4Hours.threatLevel)}
                    </td>
                    <td className="p-5 font-medium text-black-300">
                      {renderThreat(item.timeSlots.last6Hours.threatLevel)}
                    </td>
                    <td className="p-5 font-medium text-black-300">
                      {renderThreat(item.timeSlots.last8Hours.threatLevel)}
                    </td>
                    <td className="p-5 font-medium text-black-300">
                      {renderThreat(item.timeSlots.last10Hours.threatLevel)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentCards>
    </div>
  );
}
