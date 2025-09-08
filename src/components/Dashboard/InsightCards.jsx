'use client';
import React, { useState } from 'react';
import SmallCards from '../cards/SmallCards';
import Graph from '../../../public/icons/Graph';
import HandClick from '../../../public/icons/HandClick';
import WarningIcon from '../../../public/icons/WarningIcon';
import CartIcon from '../../../public/icons/CartIcon';
import { CancleCartIcon, MarkedIcon } from '@/assets/Icons';

const CardData = [
  {
    id: '1',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-200',
    icon: <Graph />,
    topic: 'Active Threats',
    price: '28%',
  },
  {
    id: '2',
    textColor: 'text-white',
    bgColor: 'bg-black-200',
    icon: <HandClick />,
    topic: 'Competitor’s Actions',
    percentage: '28%',
    price: '700',
  },
  {
    id: '3',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-400',
    icon: <WarningIcon />,
    topic: 'Response Rate',
    percentage: '28%',
    price: '$ 7000',
  },
];

export default function InsightCards({ data }) {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <div className="flex w-full flex-col md:flex-row gap-5">
      <SmallCards
        status={status}
        icon={<CartIcon />}
        textColor={'text-black-100'}
        backgroundColor={'bg-lemon-200'}
        price={data?.keyMetrics?.keyMetrics?.cartAdditions?.value}
        topic={'Cart Additions'}
        percentage={
          data?.keyMetrics?.keyMetrics?.cartAdditions?.percentageChange
        }
        show={show}
      />
      <SmallCards
        status={status}
        icon={<CancleCartIcon />}
        textColor={'text-white'}
        backgroundColor={'bg-black-200'}
        price={data?.keyMetrics?.keyMetrics?.abandonmentRate?.value}
        topic={'Abandonment Rate'}
        percentage={
          data?.keyMetrics?.keyMetrics?.abandonmentRate?.percentageChange
        }
        show={show}
      />
      <SmallCards
        status={status}
        icon={<MarkedIcon />}
        textColor={'text-white'}
        backgroundColor={'bg-black-200'}
        price={data?.keyMetrics?.keyMetrics?.conversionRate?.value}
        topic={'Conversion  Rate'}
        percentage={
          data?.keyMetrics?.keyMetrics?.conversionRate?.percentageChange
        }
        show={show}
      />
    </div>
  );
}
