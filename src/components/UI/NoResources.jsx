import Image from 'next/image';
import React from 'react';
import NoData from '../../../public/images/NoData.png';

export default function NoResources({ title }) {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <Image src={NoData} alt="no Resource" width={200} height={200} />
      <h3 className="text-gray-600 text-sm">{title}</h3>
    </div>
  );
}
