'use client';
import SettingsTab from '@/components/Dashboard/Settings/SettingsTab';
import { useSettingsEdgeQuery } from '@/redux/DashboardApi';
import React from 'react';

export default function page() {
  return (
    <div>
      <SettingsTab />
    </div>
  );
}
