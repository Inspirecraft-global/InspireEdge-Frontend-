'use client';
import React from 'react';
import ContentCards from '../cards/ContentCards';
import ReusableBarChart from '../Charts/ReusableBarChart';

export default function ActiveChat({ data }) {
  const Chartdata = data?.activityFunnelChart?.funnelChart?.steps || [];

  return (
    <ContentCards>
      <h3>Activity Funnel</h3>
      <div className="w-full h-[400px] pt-12">
        <ReusableBarChart data={Chartdata} dataKey="value" barColor="#FF9900" />{' '}
      </div>
    </ContentCards>
  );
}
