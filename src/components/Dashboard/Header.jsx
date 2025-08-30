import React from 'react';

export default function Header({ title, subText }) {
  return (
    <div className="flex md:items-start items-center flex-col gap-2">
      <h3 className="text-black-100 font-bold text-2xl">{title}</h3>
      <p className="text-gray-200">{subText} </p>
    </div>
  );
}
