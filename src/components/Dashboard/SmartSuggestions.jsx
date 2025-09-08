import React from 'react';
import ContentCards from '../cards/ContentCards';
import BarData from '../../../public/icons/BarData';

export default function SmartSuggestions({ data }) {
  const activities = data?.commandOverview?.recentActivity || [];

  if (!activities.length) {
    return (
      <div className="manrope flex flex-col gap-4 w-full max-w-full">
        <h3 className="text-black-100 font-medium text-xl">
          Smart Suggestions
        </h3>
        <p className="text-sm text-gray-400">No recent activity available</p>
      </div>
    );
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-[#FF4D4F] bg-[#FEF2F2]';
      case 'medium':
        return 'text-[#FFC107] bg-[#FEFDF0]';
      case 'low':
        return 'text-[#50C878] bg-[#EDFCF2]';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">Smart Suggestions</h3>

      <div className="grid grid-cols-1  gap-6">
        {activities.map((activity, index) => (
          <ContentCards key={index}>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-black-100">{activity.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {activity.modules.map((mod, i) => (
                  <span
                    key={i}
                    className="text-lemon-100 bg-[#A9C7110D] text-xs px-4 py-2 rounded-full"
                  >
                    {mod}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-2 items-center">
                  <BarData />
                  <h3 className="text-black-200 font-medium text-sm">
                    Confidence: {activity.confidence}%
                  </h3>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getPriorityColor(
                    activity.priority
                  )}`}
                >
                  {activity.priority.charAt(0).toUpperCase() +
                    activity.priority.slice(1)}
                </span>
              </div>
              <div className="gap-2 flex mt-3">
                <button className="bg-lemon-100 text-xs h-[30px] rounded-lg w-full">
                  Apply
                </button>
                <button className="border-[1px] text-xs h-[30px] rounded-lg w-full border-gray-300">
                  View Logic
                </button>
              </div>
            </div>
          </ContentCards>
        ))}
      </div>
    </div>
  );
}
