'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import shopImage from '../../../public/images/backpack.png';
import {
  useCartAbardonmentAuditQuery,
  useGetStoreConnectedQuery,
  useSalesPerformanceQuery,
  useShopAuditQuery,
  useShopPerformanceQuery,
  useUnderPerformanceQuery,
} from '@/redux/DashboardApi';
import ContentCards from '../cards/ContentCards';
import Link from 'next/link';
import NoResources from '../UI/NoResources';
import DashboardSkeleton from '../UI/Skeleton/DashboardSkeleton';

const ReusableBarChart = dynamic(() => import('../Charts/ReusableBarChart'), {
  ssr: false,
});

const ReusablePieChart = dynamic(() => import('../Charts/ReusablePieChart'), {
  ssr: false,
});

export default function Audit() {
  const { data: storeConnectedData, isLoading: storeLoading } =
    useGetStoreConnectedQuery();
  const { data: useSalesPerformanceData, isLoading: salesLoading } =
    useSalesPerformanceQuery();
  const { data: shopPerformanceData, isLoading: shopPerfLoading } =
    useShopPerformanceQuery();
  const { data: cartAbardonmentAudit, isLoading: cartLoading } =
    useCartAbardonmentAuditQuery();
  const { data: shopAuditData, isLoading: auditLoading } = useShopAuditQuery();
  const { data: shopUnderPerformance, isLoading: underPerfLoading } =
    useUnderPerformanceQuery();

  const isLoading =
    storeLoading ||
    salesLoading ||
    shopPerfLoading ||
    cartLoading ||
    auditLoading ||
    underPerfLoading;

  const pieChartData = useMemo(() => {
    const products =
      cartAbardonmentAudit?.cartAbandonment?.lowConversionProducts || [];
    return products.map((product) => ({
      name: product.name,
      value: product.actualSales,
    }));
  }, [cartAbardonmentAudit]);

  const salesChartData = useMemo(() => {
    const dailySales = useSalesPerformanceData?.salesPerformance?.dailySales;
    if (!dailySales) return [];
    return Object.entries(dailySales)
      .map(([date, value]) => ({
        name: date,
        value,
      }))
      .sort((a, b) => new Date(a.name) - new Date(b.name));
  }, [useSalesPerformanceData]);

  return (
    <div className="flex flex-col gap-12 manrope">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-6">
        <button className="border-[1px] text-sm manrope bg-[#DCFC361A] rounded-full border-gray-300 px-4 py-2">
          Shopify Store
        </button>
        <div className="gap-2 flex">
          <button className="hidden md:flex text-sm manrope cursor-pointer bg-yellow-100 rounded-lg font-medium px-4 py-2">
            Set up AI modules
          </button>
          <Link
            href="/dashboard"
            className="border-[1px] cursor-pointer text-sm manrope rounded-lg font-medium border-[#E5E5E5] px-4 py-2"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>

      {/* Intro */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl font-semibold text-center">
          Your Store Audit is Complete
        </h3>
        <p className="text-center text-gray-200 max-w-md">
          Here's what InspireEdge AI discovered about your store. These insights
          help power smarter recovery strategies.
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-6">
        {isLoading ? (
          <div className="flex flex-col w-full">
            <DashboardSkeleton width="100%" height="500px">
              <DashboardSkeleton width="100px" height="15px" className="mt-2" />
            </DashboardSkeleton>
          </div>
        ) : (
          <>
            <ContentCards className="h-full">
              <h3 className="text-black-100 manrope text-xl mb-14">
                Sales Performance
              </h3>
              <div className="w-full h-full">
                <h3>Activity Funnel</h3>
                <div className="w-full h-[450px] pt-12">
                  {salesChartData.length > 0 ? (
                    <ReusableBarChart data={salesChartData} dataKey="value" />
                  ) : (
                    <NoResources title=" No sales data available" />
                  )}
                </div>

                <div className="px-2 mt-[56px] gap-10 flex md:flex-row flex-col justify-between ">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-black-50 font-medium">
                      Top Performance
                    </h3>
                    <div className="flex gap-5 flex-col">
                      {shopAuditData?.topPerformers?.length ? (
                        shopAuditData.topPerformers.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-1 items-start"
                          >
                            <h3>{item?.name}</h3>
                            <p className="text-[#50C878] text-sm">
                              +{(item.revenue / 100).toFixed(2)}% MOM
                            </p>
                          </div>
                        ))
                      ) : (
                        <NoResources title=" No top performers found" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-black-50 font-medium">
                      Under Performance
                    </h3>
                    <div className="flex gap-5 flex-col">
                      {shopUnderPerformance?.underperformers?.length ? (
                        shopUnderPerformance.underperformers.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex flex-col gap-1 items-start"
                            >
                              <h3>{item?.title}</h3>
                              <p className="text-[#FF4D4F] text-sm">
                                +{(item.revenue / 100).toFixed(2)}% MOM
                              </p>
                            </div>
                          )
                        )
                      ) : (
                        <NoResources title="No underperformers found" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ContentCards>
          </>
        )}
        {/* Cart Abandonment */}
        {isLoading ? (
          <div className="flex flex-col w-full">
            <DashboardSkeleton width="100%" height="500px" />
          </div>
        ) : (
          <>
            <ContentCards>
              <ContentCards>
                <h3 className="text-black-100 text-xl mb-14">
                  Cart Abandonment Rate
                </h3>
                <div className="flex-1 flex justify-center items-center min-h-[200px]">
                  {pieChartData.length > 0 ? (
                    <div className="flex items-center md:items-end flex-col-reverse md:flex-row gap-5 w-full justify-center">
                      <div className="flex flex-col gap-4">
                        {pieChartData.map((item, index) => (
                          <div key={index} className="flex gap-1 items-center">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{
                                backgroundColor: [
                                  '#F5DE8C',
                                  '#70FA29',
                                  '#3A3A3A',
                                ][index % 3],
                              }}
                            ></div>
                            <h3 className="text-[#606C82] text-[10px]">
                              {item.name} {item.value}
                            </h3>
                          </div>
                        ))}
                      </div>
                      <div className="chartbox rounded-full">
                        <ReusablePieChart
                          data={pieChartData}
                          colors={['#F5DE8C', '#70FA29', '#3A3A3A']}
                          dataKey="value"
                          showTooltip={true}
                        />
                      </div>
                    </div>
                  ) : (
                    <NoResources title="No cart abandonment data" />
                  )}
                </div>
                <h3 className="mt-10 text-xs text-center w-full text-black-50">
                  {cartAbardonmentAudit?.cartAbandonment?.message || ''}
                </h3>
              </ContentCards>

              {/* Top Abandoned Products */}
              <div className="mt-14">
                <h3 className="text-black-50 font-medium">
                  Top 3 Abandoned Products
                </h3>
                {/* Static example - replace with dynamic data */}
                <div className="flex justify-between gap-2 items-center py-5 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <div className="w-[40px] h-[40px] border flex justify-center items-center rounded-[4px] border-gray-300">
                      <Image
                        src={shopImage}
                        alt="Shopify Product"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-1">
                      <h4 className="text-sm">Premium Wireless Headphones</h4>
                      <h3 className="text-black-50 text-xs">
                        Added to 45 carts, purchased 10 times
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-end rounded-full py-2 px-5 bg-[#FEF2F2]">
                    <h3 className="text-[#FF4D4F] text-sm">78% drop</h3>
                  </div>
                </div>
              </div>
            </ContentCards>
          </>
        )}
      </div>
    </div>
  );
}
