'use client';
import FeedbackState from '@/components/UI/FeedbackState';
import CommandCards from '@/components/Dashboard/CommandCards';
import Header from '@/components/Dashboard/Header';
import React from 'react';
import DownloadIcon from '../../../../public/icons/DownloadIcon';
import SmartSuggestions from '@/components/Dashboard/SmartSuggestions';
import { useCustomerEdgeResponseQuery } from '@/redux/DashboardApi';

export default function page() {
  const { data, isLoading, isError } = useCustomerEdgeResponseQuery();
  if (isLoading) {
    return (
      <FeedbackState
        type="loading"
        title="Loading Command Edge"
        message="We’re preparing recommended actions for your store."
      />
    );
  }
  if (isError) {
    return (
      <FeedbackState
        type="error"
        title="Unable to load Command Edge"
        message="Please retry in a moment."
      />
    );
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
