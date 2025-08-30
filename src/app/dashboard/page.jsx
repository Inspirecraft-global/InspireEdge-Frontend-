'use client';
import React, { useEffect, useState } from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import ArrowDown from '../../../public/icons/ArrowDown';
import Graph from '../../../public/icons/Graph';
import SmallCards from '@/components/cards/SmallCards';
import WalletIcon from '../../../public/icons/WalletIcon';
import CartIcon from '../../../public/icons/CartIcon';
import Recovery from '@/components/Dashboard/Recovery';
import Reasons from '@/components/Dashboard/Reasons';
import ConnectStore from '@/components/Dashboard/ConnectStore';
import Header from '@/components/Dashboard/Header';
import { useOverViewResponseQuery } from '@/redux/DashboardApi';

export default function Dashboard() {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(true);
  const { data } = useOverViewResponseQuery();
  const originalPrice = 20000;
  const price = 3000;

  useEffect(() => {
    const threshold = originalPrice * 0.2;
    if (price < threshold) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [price, originalPrice]);
  const name = 'john';

  return (
    <div className="flex flex-col gap-7 manrope">
      <Header
        title={`Welcome back ${name}`}
        subText={'See your cart abandonment insights and opportunities'}
      />
      <div className="flex w-full flex-col md:flex-row gap-5">
        <SmallCards
          status={status}
          icon={<Graph />}
          textColor={'text-black-100'}
          backgroundColor={'bg-lemon-200'}
          price={data?.overview?.summary?.currentRecoveryRate?.value}
          topic={'Current Recovery rate'}
          percentage={'2'}
          show={show}
          change={data?.overview?.summary?.currentRecoveryRate?.change}
        />
        <SmallCards
          status={status}
          icon={<CartIcon />}
          textColor={'text-white'}
          backgroundColor={'bg-black-200'}
          price={data?.overview?.summary?.abandonedCarts?.value}
          topic={'Current Recovery rate'}
          percentage={'2'}
          change={data?.overview?.summary?.abandonedCarts?.change}
          show={show}
        />
        <SmallCards
          status={status}
          icon={<WalletIcon />}
          textColor={'text-black-100'}
          backgroundColor={'bg-lemon-400'}
          price={data?.overview?.summary?.recoverableRevenue?.value}
          topic={'Current Recovery rate'}
          change={data?.overview?.summary?.recoverableRevenue?.change}
          percentage={'2'}
          show={show}
        />
      </div>
      <Recovery data={data} />
      <Reasons data={data} />
      <ConnectStore data={data} />
    </div>
  );
}
