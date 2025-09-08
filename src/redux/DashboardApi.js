import { createApi } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import baseQuery from './BaseQuery';

export const DashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    connectShopify: builder.query({
      query: (store) => {
        const token = Cookies.get('Inspire-token');
        
        return {
          url: `/store/shopify/connect?shop=${store}${token ? `&token=${token}` : ''}`,
          method: 'GET',
        };
      },
    }),
    connectWoo: builder.mutation({
      query: (body) => ({
        url: '/store/woo-commerce/connect-woocommerce',
        method: 'POST',
        body,
      }),
    }),
    connectMagneto: builder.mutation({
      query: (body) => ({
        url: '/store/magento/connect',
        method: 'POST',
        body,
      }),
    }),
    getStoreConnected: builder.query({
      query: () => ({
        url: '/store/audit/stores',
        method: 'GET',
      }),
    }),
    shopAudit: builder.query({
      query: () => ({
        url: '/store/audit/top-performers',
        method: 'GET',
      }),
    }),
    underPerformance: builder.query({
      query: () => ({
        url: '/store/audit/underperformers',
        method: 'GET',
      }),
    }),
    shopPerformance: builder.query({
      query: () => ({
        url: '/store/audit/cart-recovery',
        method: 'GET',
      }),
    }),
    reviewInsightAudit: builder.query({
      query: () => ({
        url: '/store/audit/review-insights',
        method: 'GET',
      }),
    }),
    priceBenchMarkingAudits: builder.query({
      query: () => ({
        url: '/store/audit/price-benchmarking',
        method: 'GET',
      }),
    }),
    salesPerformance: builder.query({
      query: () => ({
        url: '/store/audit/sales-performance',
        method: 'GET',
      }),
    }),
    cartAbardonmentAudit: builder.query({
      query: () => ({
        url: '/store/audit/cart-abandonment',
        method: 'GET',
      }),
    }),
    overViewResponse: builder.query({
      query: () => ({
        url: '/overview/dashboard',
        method: 'GET',
      }),
    }),
    marketOverviewResponse: builder.query({
      query: () => ({
        url: '/market-recon/overview',
        method: 'GET',
      }),
    }),
    customerEdgeResponse: builder.query({
      query: () => ({
        url: '/command-edge/overview',
        method: 'GET',
      }),
    }),
    comepetitorsResponse: builder.query({
      query: () => ({
        url: '/competitive-intelligence/dashboard',
        method: 'GET',
      }),
    }),
    customerResponse: builder.query({
      query: () => ({
        url: '/customer-analytics/dashboard',
        method: 'GET',
      }),
    }),
    commandEdge: builder.query({
      query: () => ({
        url: '/command-edge/overview',
        method: 'GET',
      }),
    }),
  }),
});
export const {
  useConnectShopifyQuery,
  useConnectWooMutation,
  useGetStoreConnectedQuery,
  useShopAuditQuery,
  useConnectMagnetoMutation,
  useCustomerEdgeResponseQuery,
  useShopPerformanceQuery,
  useSalesPerformanceQuery,
  useMarketOverviewResponseQuery,
  useCartAbardonmentAuditQuery,
  useUnderPerformanceQuery,
  useReviewInsightAuditQuery,
  usePriceBenchMarkingAuditsQuery,
  useOverViewResponseQuery,
  useCustomerResponseQuery,
  useComepetitorsResponseQuery,
  useCommandEdgeQuery,
} = DashboardApi;
