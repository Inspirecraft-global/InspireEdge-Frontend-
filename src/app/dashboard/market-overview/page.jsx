'use client';
import SmallCards from '@/components/cards/SmallCards';
import Header from '@/components/Dashboard/Header';
import React from 'react';
import MarketOverview from '@/components/Dashboard/MarketOverview';
import ProductTable from '@/components/Dashboard/ProductTable';
import Marketcards from '@/components/Dashboard/Marketcards';
import SmartAlert from '@/components/Dashboard/SmartAlert';
import DownloadIcon from '../../../../public/icons/DownloadIcon';
import { useMarketOverviewResponseQuery } from '@/redux/DashboardApi';

export default function page() {
  const { data } = useMarketOverviewResponseQuery();
  console.log(data);
  return (
    <div className="flex flex-col gap-7 manrope">
      <div className="flex justify-between items-center flex-col gap-3 md:flex-row ">
        <Header
          title={'Market Overview'}
          subText={
            'Monitor pricing gaps, optimize your strategy, and stay ahead of competitors'
          }
        />
        <button className="border-gray-300 flex gap-3 items-center border-[1px] px-5 rounded-lg py-2">
          Export Report <DownloadIcon />
        </button>
      </div>
      <Marketcards data={data} />
      <MarketOverview data={data} />
      <ProductTable data={data} />
      <SmartAlert />
    </div>
  );
}
