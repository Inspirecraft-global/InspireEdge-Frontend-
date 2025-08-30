'use client';
import React from 'react';
import ContentCards from '../cards/ContentCards';
import ReusableBarChart from '../Charts/ReusableBarChart';

const data = [
  { name: 'View', value: 2313 },
  { name: 'Cart', value: 1800 },
  { name: 'Checkout', value: 1700 },
  { name: 'Purchase', value: 1600 },
];

export default function ActiveChat() {
  return (
    <ContentCards>
      <h3>Activity Funnel</h3>
      <div className="w-full h-[400px] pt-12">
        <ReusableBarChart data={data} dataKey="count" barColor="#FF9900" />{' '}
      </div>
    </ContentCards>
  );
}
