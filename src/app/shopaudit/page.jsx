import AIModules from '@/components/ShopAudit/AIModules';
import Audit from '@/components/ShopAudit/Audit';
import PriceBenchMarking from '@/components/ShopAudit/PriceBenchMarking';
import WhatCustomers from '@/components/ShopAudit/WhatCustomers';
import React from 'react';

export default function page() {
  return (
    <div className="px-2 md:px-10 py-6">
      <Audit />
      <WhatCustomers />
      <PriceBenchMarking />
      <AIModules />
    </div>
  );
}
