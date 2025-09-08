'use client';
import FeedbackState from '@/components/UI/FeedbackState';
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
  const [status, setStatus] = useState(true);
  const [cartStatus, setCartStatus] = useState(true);
  const [recStatus, setRecStatus] = useState(true);
  const [show, setShow] = useState(true);
  const { data, isLoading, isError } = useOverViewResponseQuery();
  const name = ' Lola';

  useEffect(() => {
    if (data?.overview?.summary?.currentRecoveryRate?.trend === 'up') {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  }, [data]);

  useEffect(() => {
    if (data?.overview?.summary?.abandonedCarts?.trend === 'up') {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [data]);

  useEffect(() => {
    if (data?.overview?.summary?.recoverableRevenue?.trend === 'up') {
      setRecStatus(true);
    } else {
      setRecStatus(false);
    }
  }, [data]);
  if (isLoading) {
    return (
      <FeedbackState
        type="loading"
        title="Loading your dashboard"
        message="We’re fetching your latest metrics and insights."
      />
    );
  } else if (isError) {
    return (
      <FeedbackState
        type="error"
        title="Dashboard failed to load"
        message="Please refresh the page or try again in a moment."
      />
    );
  }
  return (
    <div className="flex flex-col gap-7 manrope">
      <Header
        title={`Welcome back ${name}`}
        subText={'See your cart abandonment insights and opportunities'}
      />
      <div className="flex w-full flex-col md:flex-row gap-5">
        <SmallCards
          status={cartStatus}
          icon={<Graph />}
          textColor={'text-black-100'}
          backgroundColor={'bg-lemon-200'}
          price={data?.overview?.summary?.currentRecoveryRate?.value + '%'}
          topic={'Current Recovery rate'}
          percentage={data?.overview?.summary?.currentRecoveryRate?.change}
          show={show}
          change={data?.overview?.summary?.currentRecoveryRate?.change}
        />
        <SmallCards
          status={status}
          icon={<CartIcon />}
          textColor={'text-white'}
          backgroundColor={'bg-black-200'}
          price={data?.overview?.summary?.abandonedCarts?.value + '%'}
          topic={'Abandoned Carts'}
          percentage={data?.overview?.summary?.abandonedCarts?.change}
          change={data?.overview?.summary?.abandonedCarts?.change}
          show={show}
        />
        <SmallCards
          status={recStatus}
          icon={<WalletIcon />}
          textColor={'text-black-100'}
          backgroundColor={'bg-lemon-400'}
          price={data?.overview?.summary?.recoverableRevenue?.value + '%'}
          topic={'Recoverable Revenue'}
          change={data?.overview?.summary?.recoverableRevenue?.change}
          percentage={data?.overview?.summary?.recoverableRevenue?.change}
          show={show}
        />
      </div>
      <Recovery data={data} />
      <Reasons data={data} />
      <ConnectStore data={data} />
    </div>
  );
}
