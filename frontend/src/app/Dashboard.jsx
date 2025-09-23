import React from 'react';
import Header from './components/header/AppHeader';
import HeroSection from './section/Hero';
import KPI from './section/KPI';
import DashboardGrid from './section/DashboardGrid';

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <HeroSection />
        <KPI />
        <DashboardGrid />
      </main>
    </div>
  );
};

export default Dashboard;
