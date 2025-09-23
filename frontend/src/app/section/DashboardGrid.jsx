import React from 'react';
import CashFlowChart from './CashFlow';
import Expense from './Expenses';
import ExpenseCategories from './ExpenseCategory';
import QuickActions from './QA';
import RecentAlerts from './RecentAlert';

const DashboardGrid = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Column - Cash Flow Chart */}
      <div className="lg:col-span-5">
        <Expense/>
        {/* <CashFlowChart /> */}
      </div>

      {/* Center Column - Expense Breakdown
      <div className="lg:col-span-4">
        <ExpenseCategories />
      </div> */}

      {/* Right Column - Quick Actions & Alerts */}
      <div className="lg:col-span-3 space-y-6">
        <QuickActions />
        <RecentAlerts />
      </div>
    </section>
  );
};

export default DashboardGrid;
