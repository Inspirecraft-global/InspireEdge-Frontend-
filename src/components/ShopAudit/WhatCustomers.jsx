'use client';
import React from 'react';
import ContentCards from '../cards/ContentCards';
import { useReviewInsightAuditQuery } from '@/redux/DashboardApi';
import NoResources from '../UI/NoResources';
import DashboardSkeleton from '../UI/Skeleton/DashboardSkeleton';

export default function WhatCustomers() {
  const { data: reviews, isLoading } = useReviewInsightAuditQuery();
  return (
    <div className="mt-10 manrope">
      {isLoading ? (
        <div className="flex flex-col w-full">
          <DashboardSkeleton width="100%" height="300px" />
        </div>
      ) : (
        <>
          <ContentCards>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h3 className="text-black manrope text-xl ">
                What Customers Are Saying
              </h3>
              <div className="flex flex-col items-center md:flex-row gap-3">
                <h3 className="text-[#00000099]">Avg Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#50C878] text-[#050505] text-xs"></div>
                  <h3 className="text-[#00000099]">
                    Positive:{' '}
                    {reviews?.reviewInsights?.summary?.positivePercent} %
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF4D4F] text-[#050505] text-xs"></div>
                  <h3 className="text-[#00000099]">
                    Negative:{' '}
                    {reviews?.reviewInsights?.summary?.negativePercent} %
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E5E5E5] text-[#050505] text-xs"></div>
                  <h3 className="text-[#00000099]">
                    Natural: {reviews?.reviewInsights?.summary?.neutralPercent}%
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex w-full mt-10 items-center justify-center">
              {reviews?.insights?.length === 0 ? (
                'data'
              ) : (
                <NoResources title={'No Data Available'} />
              )}
            </div>
          </ContentCards>
        </>
      )}
    </div>
  );
}
