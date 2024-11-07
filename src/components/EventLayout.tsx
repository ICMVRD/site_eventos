import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const EventLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};