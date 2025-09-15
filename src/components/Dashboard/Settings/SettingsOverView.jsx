import { DownloadIcon } from '@/assets/Icons';
import ContentCards from '@/components/cards/ContentCards';
import SmallCards from '@/components/cards/SmallCards';
import Modal from '@/components/UI/Modal';
import React from 'react';
import ProfileSettings from './ProfileSettings';

export default function SettingsOverView({ data }) {
  const usage = data?.settingsOverview?.planUsage?.usage;
  const recent = data?.settingsOverview?.planUsage;
  return (
    <div className="flex font-manrope flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContentCards>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#050505] font-work-sans">
              Campaigns Triggered
            </h3>
            <p className="text-[#050505] font-work-sans font-semibold text-xl">
              {usage?.campaignsTriggered}
            </p>
          </div>
        </ContentCards>
        <ContentCards>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#050505] font-work-sans">Monthly Visitors</h3>
            <p className="text-[#050505] font-work-sans font-semibold text-xl">
              {usage?.monthlyVisitors}
            </p>
          </div>
        </ContentCards>{' '}
        <ContentCards>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#050505] font-work-sans">Monthly Visitors</h3>
            <p className="text-[#050505] font-work-sans font-semibold text-xl">
              {usage?.activeModules}
            </p>
          </div>
        </ContentCards>{' '}
      </div>
      <ContentCards>
        <h3 className="text-[#050505] font-work-sans mb-4">Recent Invoices</h3>
        <div className="space-y-3">
          {recent?.recentInvoices.map((item, index) => (
            <div key={index} className="p-3 flex justify-between items-center">
              <span className="text-[#00000099]">{item?.period}</span>
              <span className="text-sm flex cursor-pointer items-center gap-2 text-[#050505]">
                ${item?.amount}
                <DownloadIcon />
              </span>
            </div>
          ))}
        </div>
      </ContentCards>
      <ProfileSettings />
    </div>
  );
}
