'use client';
import SmallCards from '@/components/cards/SmallCards';
import Header from '@/components/Dashboard/Header';
import React from 'react';
import DownloadIcon from '../../../../public/icons/DownloadIcon';
import CustomerCards from '@/components/Dashboard/CustomerCards';
import CustomerTable from '@/components/Dashboard/CustomerTable';
import StrikeDetection from '@/components/Dashboard/StrikeDetection';
import MarketRader from '@/components/Dashboard/MarketRader';
import YourEdge from '@/components/Dashboard/YourEdge';
import {
  useComepetitorsResponseQuery,
  useCompetitorsInsightQuery,
  useCustomerEdgeResponseQuery,
} from '@/redux/DashboardApi';

export default function page() {
  const { data, isLoading } = useComepetitorsResponseQuery();
  if (isLoading) {
    return <h2>Loading Data</h2>;
  }
  return (
    <div className="flex flex-col gap-7 manrope">
      <div className="flex justify-between items-center flex-col gap-3 md:flex-row ">
        <Header
          title={'Competitor’s Insight'}
          subText={'Decode every click. Understand intent, predict outcomes'}
        />
        <button className="border-gray-300 cursor-pointer flex gap-3 items-center border-[1px] px-5 rounded-lg py-2">
          Export Report <DownloadIcon />
        </button>
      </div>
      <CustomerCards data={data} />
      {/*    <CustomerTable data={data} /> */}
      <MarketRader data={data} />
      <YourEdge />
    </div>
  );
}
