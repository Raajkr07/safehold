import React from 'react';
import CashFlowChart from './section/CashFlow';
import Expense from './section/Expenses';
import ExpenseCategories from './section/ExpenseCategory';
import QuickActions from './section/QA';
import RecentAlerts from './section/RecentAlert';

const DashboardGrid = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto">
      {/* Left Column - Cash Flow Chart */}
      <div className="lg:col-span-5">
        {/* <Expense/> */}
        <CashFlowChart />
      </div>

      {/* Center Column - Expense Breakdown */}
      <div className="lg:col-span-4">
        <ExpenseCategories />
      </div>

      {/* Right Column - Quick Actions & Alerts */}
      <div className="lg:col-span-3 space-y-6">
        <RecentAlerts />
        <QuickActions />
      </div>
    </section>
  );
};

export default DashboardGrid;
