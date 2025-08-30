import Image from 'next/image';
import React from 'react';
//import DE from '../../../public/images/DE.png';
import Ali from '../../../public/images/Ali.png';
import Ass from '../../../public/images/assend.png';
import fin from '../../../public/images/fin.png';
import codebr from '../../../public/images/codebr.png';
import sprint from '../../../public/images/datadef.png';

export default function Patners() {
  return (
    <div className="w-full flex flex-col items-center justify-center space">
      <h3 className="mb-10 text-center">
        Powering tools and integrations from companies all around the world
      </h3>
      <div className="overflow-hidden w-full">
        <div className="scrolling-track flex gap-3 w-max">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <Image src={Ali} alt="de" />
              <Image src={Ass} alt="de" className="w-[200px] object-contain" />
              <Image src={fin} alt="de" />
              <Image src={codebr} alt="de" />
              <Image src={sprint} alt="de" className="" />
            </React.Fragment>
          ))}
          {/* You can duplicate if needed for smooth loop */}
        </div>
      </div>
    </div>
  );
}
