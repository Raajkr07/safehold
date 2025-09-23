import React from 'react';
import Header from '../components/header/AppHeader';
import Footer from '../../components/footer/AppFooter';
import HeroSection from './section/Hero';
import KPI from './section/KPI';
import DashboardGrid from './DashboardGrid';
import SupportButton from '../components/support/Support';
import ToDoList from './section/ToDoList';

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen my-6'>
      <Header />
      <main className=" mx-auto px-6 pt-24 pb-10">
        <HeroSection />
        <KPI />
        <DashboardGrid />
        <ToDoList/>
      </main>
      <div className='w-full h-auto mt-12'>
        <Footer/>
        <SupportButton />
      </div>
    </div>
  );
};

export default Dashboard;
