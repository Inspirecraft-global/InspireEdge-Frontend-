'use client';
import React from 'react';

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
export default function FrictionPoints({ data }) {
  const issues = data?.frictionPoints?.frictionPoints?.issues || [];
  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">Friction Points</h3>

      {issues.length === 0 ? (
        <div className="flex items-center justify-center h-40 bg-[#F9F9F9] border border-[#F1F1F1] rounded-md">
          <p className="text-gray-500 text-sm font-medium">
            No friction points available
          </p>
        </div>
      ) : (
        <table className="min-w-full border rounded-md border-[#F1F1F1] divide-y divide-[#F1F1F1]">
          <thead className="bg-[#F9F9F9] rounded-md">
            <tr className="rounded-md h-[56px]">
              <th className="p-5 text-left text-sm font-medium text-black-200">
                Issue
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Location
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Frequency
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Threat Score
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F1F1] bg-white">
            {issues.map((item, idx) => (
              <tr key={item.id || idx} className="bg-white transition">
                <td className="p-5 font-medium text-black-300">{item.issue}</td>
                <td className="p-5 font-medium text-black-300">
                  {item.location}
                </td>
                <td className="p-5 font-medium text-black-300">
                  {item.frequencyPercentage}
                </td>
                <td className="p-5 font-medium text-black-300">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${getThreatColor(
                      item.threatScore
                    )}`}
                  >
                    {item.threatScore}
                  </span>
                </td>
                <td className="p-5 font-medium text-black-200">
                  <button className="px-6 py-2 rounded-lg border border-lemon-100">
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
