import React from 'react';
import ContentCards from '../cards/ContentCards';
import Pilot from '../../../public/icons/Pilot';

export default function AIModules() {
  return (
    <div className="flex flex-col mt-10 manrope">
      <h3 className="text-black text-xl ">Unlock AI Modules</h3>
      <ContentCards>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ContentCards>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Pilot />
                <h3 className="text-[#A9C711] bg-[#DCFC3614] text-xs px-4 py-2 rounded-full border-[1px] border-[#F1F1F1]">
                  Recommended
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <h3>Abandonment Co-Pilot</h3>
                <p className="text-[#00000099] text-xs">
                  Automatically recover lost carts with personalized messaging
                  and incentives.
                </p>
                <button className="bg-[#DCFC36] py-2 text-sm rounded-lg font-medium">
                  Activate
                </button>
              </div>
            </div>
          </ContentCards>
          <ContentCards>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Pilot />
                <h3 className="text-[#A9C711] bg-[#DCFC3614] text-xs px-4 py-2 rounded-full border-[1px] border-[#F1F1F1]">
                  Recommended
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <h3>Abandonment Co-Pilot</h3>
                <p className="text-[#00000099] text-xs">
                  Automatically recover lost carts with personalized messaging
                  and incentives.
                </p>
                <button className="bg-[#DCFC36] py-2 text-sm rounded-lg font-medium">
                  Activate
                </button>
              </div>
            </div>
          </ContentCards>
          <ContentCards>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Pilot />
                <h3 className="text-[#A9C711] bg-[#DCFC3614] text-xs px-4 py-2 rounded-full border-[1px] border-[#F1F1F1]">
                  Recommended
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <h3>Abandonment Co-Pilot</h3>
                <p className="text-[#00000099] text-xs">
                  Automatically recover lost carts with personalized messaging
                  and incentives.
                </p>
                <button className="bg-[#DCFC36] py-2 text-sm rounded-lg font-medium">
                  Activate
                </button>
              </div>
            </div>
          </ContentCards>
        </div>
      </ContentCards>
    </div>
  );
}
