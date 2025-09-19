'use client';
import { DollarIcons, ModulusIcons, StarIcons } from '@/assets/Icons';

export default function CommandCards({ data }) {
  return (
    <div className="flex w-full flex-col md:flex-row gap-5">
      <div className="bg-lemon-200 w-full  rounded-xl flex justify-between px-5 py-4">
        <div className="text-black-100 ">
          <h3 className="text-black-100">Total actions suggested</h3>
          <h3 className="text-3xl font-medium flex mt-3 gap-2 items-baseline">
            {data?.commandOverview?.summaryCards?.totalActionsSuggested?.count}
            <p className="text-base">
              {
                data?.commandOverview?.summaryCards?.totalActionsSuggested
                  ?.period
              }
            </p>
          </h3>
        </div>
        <StarIcons />
      </div>
      <div className="bg-black-200 w-full  rounded-xl flex justify-between px-5 py-4">
        <div className="text-white ">
          <h3 className="text-white">Most Active Modules</h3>
          <h3 className="text-sm font-medium flex flex-wrap mt-3 gap-2 items-baseline">
            {data?.commandOverview?.summaryCards?.mostActiveModules?.modules?.map(
              (item, index) => (
                <p
                  key={index}
                  className="text-sm border-1 border-[#FFFFFF1A] rounded-full px-2"
                >
                  {item}
                </p>
              )
            )}
          </h3>
        </div>
        <ModulusIcons />
      </div>
      <div className="bg-lemon-400 w-full  rounded-xl flex justify-between px-5 py-4">
        <div className="text-black-100 ">
          <h3 className="text-black-100">Estimated Revenue Impact</h3>
          <h3 className="text-3xl font-medium grid grid-cols-2 mt-3 gap-2 items-baseline">
            {
              data?.commandOverview?.summaryCards?.estimatedRevenueImpact
                ?.prefix
            }
            {data?.commandOverview?.summaryCards?.estimatedRevenueImpact?.icon}
            {
              data?.commandOverview?.summaryCards?.estimatedRevenueImpact
                ?.amount
            }
          </h3>
        </div>
        <DollarIcons />
      </div>
    </div>
  );
}
