'use client';
import React, { useState } from 'react';

const getThreatColor = (level) => {
  switch (level) {
    case 'Low':
      return 'bg-[#EDFCF2] text-[#50C878]';
    case 'Medium':
      return 'bg-[#FEFDF0] text-[#FFC107]';
    case 'High':
      return 'bg-[#FEF2F2] text-[#FF4D4F]';
    default:
      return '';
  }
};

export default function CustomerTable({ data }) {
  const [selected, setSelected] = useState([]);

  const toggleSelectAll = () => {
    if (selected.length === data?.productPerformance?.competitors?.length) {
      setSelected([]);
    } else {
      setSelected(data.productPerformance.competitors.map((_, i) => i));
    }
  };

  const toggleRow = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="manrope">
      <h3 className="text-black-100 font-medium text-xl">
        Product Performance
      </h3>
      <div className="overflow-x-auto w-full  mt-5">
        <table className="min-w-[900px] w-full border rounded-md border-[#F1F1F1] divide-y divide-[#F1F1F1]">
          <thead className="bg-[#F9F9F9] rounded-md">
            <tr className="rounded-md h-[56px]">
              <th className="p-5 text-left text-sm font-medium text-black-200">
                Competitor
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Recent Price Changes
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Threat Score
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                New Campaign Detected
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F1F1] bg-white">
            {data?.productPerformance?.competitors?.map((item, idx) => (
              <tr
                key={idx}
                onClick={() => toggleRow(idx)}
                className={`hover:bg-gray-50 transition ${
                  selected.includes(idx) ? 'bg-blue-50' : ''
                }`}
              >
                {/* Competitor name & domain */}
                <td className="p-5 font-medium text-black-300">
                  {item.competitor} <br />
                  <span className="text-xs text-gray-500">
                    {item.competitorDomain}
                  </span>
                </td>

                {/* Recent Price Changes */}
                <td className="p-5 font-medium text-black-300">
                  {item.recentPriceChanges}
                </td>

                {/* Threat Score */}
                <td className="p-5 font-medium text-black-300">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${getThreatColor(
                      item.threatScore
                    )}`}
                  >
                    {item.threatScore} ({item.threatScoreValue})
                  </span>
                </td>

                {/* New Campaign Detected */}
                <td className="p-5 font-medium text-black-200">
                  {item.newCampaignDetected ?? 'None'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
