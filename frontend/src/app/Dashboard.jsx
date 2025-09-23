import React from 'react';
import Header from './components/header/AppHeader';
import HeroSection from './section/Hero';
import KPI from './section/KPI';
import DashboardGrid from './DashboardGrid';

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header />
      <main className=" mx-auto px-6 pt-24 pb-10">
        <HeroSection />
        <KPI />
        <DashboardGrid />
      </main>
    </div>
  );
};

export default Dashboard;
