import React from 'react';
import CashFlowChart from './section/CashFlow';
import Expense from './section/Expenses';
import ExpenseCategories from './section/ExpenseCategory';
import QuickActions from './section/QA';
import RecentAlerts from './section/RecentAlert';

const DashboardGrid = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto">
      <div className="lg:col-span-5">
        <CashFlowChart />
      </div>
      <div className="lg:col-span-4">
        <ExpenseCategories />
      </div>
      <div className="lg:col-span-3 space-y-6">
        <QuickActions />
        <RecentAlerts />
      </div>
    </section>
  );
};

export default DashboardGrid;
