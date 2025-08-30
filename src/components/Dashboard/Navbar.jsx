'use client';
import React, { useState } from 'react';
import SideClose from '../../../public/icons/SideClose';
import MenuIcon from '../../../public/icons/MenuIcon';
import SearchIcon from '../../../public/icons/SearchIcon';
import Notification from '../../../public/icons/Notification';
import user from '../../../public/images/user.jpg';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import HomeIcon from '../../../public/icons/HomeIcon';
import MarketIcon from '../../../public/icons/MarketIcon';
import CustomerIcon from '../../../public/icons/CustomerIcon';
import CustomerImpulseIcon from '../../../public/icons/CustomerImpulseIcon';
import CommandEdgeIcon from '../../../public/icons/CommandEdgeIcon';
import IntegrationIcon from '../../../public/icons/IntegrationIcon';
import UserIcon from '../../../public/icons/UserIcon';
import SettingsIcon from '../../../public/icons/SettingsIcon';

import Image from 'next/image';
import ArrowDownIcon from '../../../public/icons/ArrowDownIcon';
import { usePathname } from 'next/navigation';

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

export default function Navbar({ toggleSidebar, toggleMobileSidebar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="h-[64px] inter border-[1px] border-gray-300 w-full flex justify-between px-3 items-center gap-2 bg-white sticky top-0 z-30 ">
        <div className="flex items-center gap-2">
          <div className="flex items-center h-full">
            <button
              className="p-2 md:hidden flex hover:bg-gray-100 rounded-lg transition-colors bg-blue-100"
              onClick={openSidebar}
            >
              <HiMenu size={20} />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 hidden md:flex hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              <SideClose />
            </button>
          </div>

          <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
              Overview
            </h3>

            <div className="w-[200px] md:w-[300px] lg:w-[371px] border-[1px] rounded-lg px-3 border-gray-300 items-center hidden md:flex h-[40px]">
              <SearchIcon />
              <input
                className="w-full h-full px-3 focus:outline-none text-gray-200"
                placeholder="Global Search"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Menu Button for Sidebar */}

          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Notification />
          </button>

          <div className="flex items-center gap-2 p-2 rounded-lg transition-colors cursor-pointer">
            <Image
              src={user}
              alt="User profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
            <ArrowDownIcon />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0  bg-opacity-50 transition-opacity"
            onClick={closeSidebar}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4  border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">Navigation</h3>
              <button
                onClick={closeSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <HiX size={24} />
              </button>
            </div>

            <nav className="mt-4 flex flex-col space-y-1 flex-1 overflow-y-auto px-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.name} href={item.path} onClick={closeSidebar}>
                    <div
                      className={`
                    flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200
                    ${
                      isActive
                        ? 'bg-lime-300 text-black-100 shadow-sm'
                        : 'text-black-200 hover:bg-gray-100 hover:text-black-100'
                    }
                  `}
                    >
                      <span className="text-gray-600">{item.icon}</span>
                      <span className="font-medium text-gray-700">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
