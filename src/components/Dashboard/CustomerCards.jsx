'use client';
import React, { useState } from 'react';
import SmallCards from '../cards/SmallCards';
import Graph from '../../../public/icons/Graph';
import HandClick from '../../../public/icons/HandClick';
import WarningIcon from '../../../public/icons/WarningIcon';

export default function CustomerCards({ data }) {
  const [status, setStatus] = useState(false);
  console.log(data);

  return (
    <div className="flex w-full flex-col md:flex-row gap-5">
      <SmallCards
        status={status}
        icon={<Graph />}
        textColor={'text-black-100'}
        backgroundColor={'bg-lemon-200'}
        price={data?.overview?.activeThreats}
        topic={'Active Threats'}
      />
      <SmallCards
        status={status}
        icon={<HandClick />}
        textColor={'text-white'}
        backgroundColor={'bg-black-200'}
        price={data?.overview?.competitorsTracked}
        topic={'Competitor’s Actions'}
      />
      <SmallCards
        status={status}
        icon={<WarningIcon />}
        textColor={'text-black-100'}
        backgroundColor={'bg-lemon-400'}
        price={data?.overview?.responseRate}
        topic={'Response Rate'}
      />
    </div>
  );
}
