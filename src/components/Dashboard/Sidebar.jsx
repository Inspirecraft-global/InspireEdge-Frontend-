'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideClose from '../../../public/icons/SideClose';
import HomeIcon from '../../../public/icons/HomeIcon';
import MarketIcon from '../../../public/icons/MarketIcon';
import CustomerIcon from '../../../public/icons/CustomerIcon';
import CustomerImpulseIcon from '../../../public/icons/CustomerImpulseIcon';
import CommandEdgeIcon from '../../../public/icons/CommandEdgeIcon';
import IntegrationIcon from '../../../public/icons/IntegrationIcon';
import UserIcon from '../../../public/icons/UserIcon';
import SettingsIcon from '../../../public/icons/SettingsIcon';

const navItems = [
  { name: 'Overview', path: '/dashboard', icon: <HomeIcon /> },
  {
    name: 'Market Overview',
    path: '/dashboard/market-overview',
    icon: <MarketIcon />,
  },
  {
    name: "Competitor's Insight",
    path: '/dashboard/customers-insight',
    icon: <CustomerIcon />,
  },
  {
    name: "Customer's Pulse",
    path: '/dashboard/customers-pulse',
    icon: <CustomerImpulseIcon />,
  },
  {
    name: 'Command Edge',
    path: '/dashboard/customers-edge',
    icon: <CommandEdgeIcon />,
  },
  { name: 'Integration', path: '/integration', icon: <IntegrationIcon /> },
  { name: 'Teams and Roles', path: '/teams', icon: <UserIcon /> },
  { name: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];

export default function Sidebar({
  collapsed,
  toggleSidebar,
  mobileSidebarOpen,
  toggleMobileSidebar,
}) {
  const pathname = usePathname();

  // Close mobile sidebar when route changes
  useEffect(() => {
    if (mobileSidebarOpen) {
      toggleMobileSidebar();
    }
  }, [pathname, mobileSidebarOpen, toggleMobileSidebar]);

  return (
    <div className="manrope w-full h-full">
      <div
        className={`h-full flex flex-col top-0 left-0 bg-white border-r-[1px] border-gray-300 z-50
          transition-all duration-300 ease-in-out 
          ${collapsed ? 'w-[70px]' : 'w-[280px]'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-7  border-gray-200">
          {!collapsed && (
            <h3 className="text-xl font-bold text-gray-800 truncate">
              InspireEdge
            </h3>
          )}
        </div>

        {/* Navigation */}
        <nav
          className={`mt-4 flex flex-col space-y-1 flex-1 overflow-y-auto
              ${collapsed ? 'px-2' : 'px-4 md:px-7'}`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path}>
                <div
                  className={`
                    flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200
                    ${
                      isActive
                        ? 'bg-lime-300 text-black-100 shadow-sm'
                        : 'text-black-200 hover:bg-gray-100 hover:text-black-100'
                    }
                    ${collapsed ? 'justify-center' : ''}
                  `}
                  title={collapsed ? item.name : ''}
                >
                  <span
                    className={`${
                      isActive ? 'text-black-100' : 'text-gray-600'
                    }`}
                  >
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <span
                      className={`font-medium ${
                        isActive ? 'text-black-100' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
