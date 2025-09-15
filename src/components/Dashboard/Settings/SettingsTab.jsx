import React, { useState } from 'react';
import SettingsOverView from './SettingsOverView';
import { useSettingsEdgeQuery } from '@/redux/DashboardApi';
import NotificationSettings from './NotificationSettings';
import PasswordSettings from './PasswordSettings';

export default function SettingsTab() {
  const { data, isLoading, error } = useSettingsEdgeQuery();
  console.log(data);
  const [activeTab, setActiveTab] = useState('tab1');
  const plan = data?.settingsOverview?.planUsage?.plan;
  console.log(plan);

  const tabs = [
    {
      id: 'tab1',
      label: 'General and profile settings',
      content: <SettingsOverView data={data} />,
    },
    {
      id: 'tab2',
      label: 'Notification and store connection',
      content: <NotificationSettings />,
    },
    {
      id: 'tab3',
      label: 'Account and password settings',
      content: <PasswordSettings />,
    },
  ];

  return (
    <div className="px-2 font-manrope max-w-7xl mx-auto w-full flex font-work-sans flex-col justify-center items-center gap-20 py-10">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between gap-6 w-full hide-scrollbar border-b border-gray-300 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0  gap-6 cursor-pointer py-3 text-sm md:text-base font-medium transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? 'text-[#151035] font-bold '
                    : 'text-gray-600 hover:text-[#151035]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-[#050505] font-manrope  font-medium">
            Plan & Usage Overview
          </p>
          <div className="settingcard flex justify-between items-center px-2 md:px-6 py-10 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold font-manrope text-xl">
                {plan?.name}
              </h3>
              <p>{plan?.type}</p>
            </div>
            <button
              disabled={!plan?.canUpgrade}
              className={`bg-[#050505] text-white px-4 md:px-9 py-3 rounded-2xl ${
                !plan?.canUpgrade
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              Upgrade Plan
            </button>
          </div>
        </div>
        <div className="px-2 md:px-4 mt-4">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}
