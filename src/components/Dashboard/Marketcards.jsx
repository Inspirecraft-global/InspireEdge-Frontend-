'use client';
import React, { useEffect, useState } from 'react';
import SmallCards from '../cards/SmallCards';
import Graph from '../../../public/icons/Graph';
import HandClick from '../../../public/icons/HandClick';
import WarningIcon from '../../../public/icons/WarningIcon';

const CardData = [
  {
    id: '1',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-200',
    icon: <Graph />,
    topic: 'Sales Velocity',
    percentage: '28%',
    price: '28%',
  },
  {
    id: '2',
    textColor: 'text-white',
    bgColor: 'bg-black-200',
    icon: <HandClick />,
    topic: 'Click-through Rate',
    percentage: '28%',
    price: '700',
  },
  {
    id: '3',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-400',
    icon: <WarningIcon />,
    topic: 'Stock-out risk level',
    percentage: '28%',
    price: '$ 7000',
  },
];

export default function Marketcards({ data }) {
  const [status, setStatus] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (data?.salesVelocity?.trend === 'up') {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [data?.salesVelocity?.trend]);
  return (
    <div className="flex w-full flex-col md:flex-row gap-5">
      <SmallCards
        status={status}
        icon={<Graph />}
        textColor={'text-black-100'}
        backgroundColor={'bg-lemon-200'}
        price={data?.salesVelocity?.value}
        topic={'Sales Velocity'}
        percentage={data?.salesVelocity?.change}
        show={show}
      />
      <SmallCards
        status={status}
        icon={<Graph />}
        textColor={'text-white'}
        backgroundColor={'bg-black-200'}
        price={data?.clickThroughRate?.value}
        topic={'Click-through Rate'}
        percentage={data?.clickThroughRate?.change}
        show={show}
      />
      <SmallCards
        status={status}
        icon={<WarningIcon />}
        textColor={'text-black-100'}
        backgroundColor={'bg-lemon-400'}
        price={data?.stockRisk?.percentage || 0}
        topic={'Stock-out risk level'}
        percentage={data?.stockRisk?.percentage || 0}
        show={show}
      />
    </div>
  );
}
