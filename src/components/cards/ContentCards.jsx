import React from 'react';

export default function ContentCards({ children }) {
  return (
    <div className="w-full border-[1px] py-5 px-2 md:px-6 rounded-2xl border-gray-300">
      {children}
    </div>
  );
}
