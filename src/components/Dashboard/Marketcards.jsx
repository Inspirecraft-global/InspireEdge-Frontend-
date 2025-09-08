'use client';
import React, { useEffect, useState } from 'react';
import SmallCards from '../cards/SmallCards';
import Graph from '../../../public/icons/Graph';
import HandClick from '../../../public/icons/HandClick';
import WarningIcon from '../../../public/icons/WarningIcon';

export default function Marketcards({ data }) {
  const [status, setStatus] = useState(true);
  const [cartStatus, setCartStatus] = useState(true);
  const [recStatus, setRecStatus] = useState(true);

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (data?.salesVelocity?.trend === 'up' || 'stable') {
      setCartStatus(true);
      console.log(cartStatus);
    } else {
      setCartStatus(false);
    }
  }, [data]);

  useEffect(() => {
    if (data?.stockRisk?.trend === 'up') {
      setRecStatus(true);
    } else {
      setRecStatus(false);
    }
  }, [data]);

  useEffect(() => {
    if (data?.clickThroughRate?.trend === 'up') {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [data?.salesVelocity?.trend]);
  return (
    <div className="flex w-full flex-col md:flex-row gap-5">
      <SmallCards
        status={cartStatus}
        icon={<Graph />}
        textColor={'text-black-100'}
        backgroundColor={'bg-lemon-200'}
        price={data?.salesVelocity?.value + '%' || '0%'}
        topic={'Sales Velocity'}
        percentage={data?.salesVelocity?.change}
        show={show}
        dateupdated={data?.salesVelocity?.changeText}
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
        dateupdated={data?.clickThroughRate?.comparison}
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
        dateupdated={data?.stockRisk?.timeframe}
      />
    </div>
  );
}
