'use client';
import CommandCards from '@/components/Dashboard/CommandCards';
import Header from '@/components/Dashboard/Header';
import React from 'react';
import DownloadIcon from '../../../../public/icons/DownloadIcon';
import SmartSuggestions from '@/components/Dashboard/SmartSuggestions';
import { useCustomerEdgeResponseQuery } from '@/redux/DashboardApi';

export default function page() {
  const { data, isLoading } = useCustomerEdgeResponseQuery();
  if (isLoading) {
    return <h2>Loading Data</h2>;
  }
  return (
    <div className="flex flex-col gap-7 manrope">
      <div className="flex justify-between items-center flex-col gap-3 md:flex-row ">
        <Header
          title={'Command Edge'}
          subText={
            'Turn intelligence into action. Command Edge recommends your next best moves—before the competition even sees them.'
          }
        />
      </div>
      <CommandCards data={data} />
      <SmartSuggestions data={data} />
    </div>
  );
}
