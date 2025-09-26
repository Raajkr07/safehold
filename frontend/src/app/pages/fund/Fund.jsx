import React, { useState } from 'react';
import Header from '../../components/header/AppHeader';
import Footer from '../../../components/footer/AppFooter';
import FundKPI from './section/KPI';
import FundList from './section/List';
import FundFilter from './section/Filter';
import AddFundModal from './section/Modal';
import FundSummaryChart from './section/SummaryChart';

const FundPage = () => {
  // Sample fund data
  const initialFunds = [
    { id: 1, name: 'Equity Fund', type: 'Equity', amount: 250000, status: 'active', startDate: '2023-01-01', endDate: '2024-01-01' },
    { id: 2, name: 'Debt Fund', type: 'Debt', amount: 150000, status: 'active', startDate: '2022-05-15', endDate: '2023-05-15' },
    { id: 3, name: 'Balanced Fund', type: 'Balanced', amount: 100000, status: 'expired', startDate: '2021-03-01', endDate: '2022-03-01' },
    { id: 4, name: 'Index Fund', type: 'Index', amount: 50000, status: 'active', startDate: '2023-06-01', endDate: '2024-06-01' },
    { id: 5, name: 'International Fund', type: 'Equity', amount: 75000, status: 'expired', startDate: '2020-09-01', endDate: '2021-09-01' },
  ];

  const [funds, setFunds] = useState(initialFunds);
  const [filters, setFilters] = useState({ type: 'all', search: '', dateRange: { from: '', to: '' } });
  const [showAddFund, setShowAddFund] = useState(false);

  const handleAddFund = (newFund) => {
    setFunds(prev => [...prev, newFund]);
    setShowAddFund(false);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto mt-28">
      <Header />

      {/* KPI Section */}
      <FundKPI funds={funds} />

      {/* Filter + Add Button */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <FundFilter filters={filters} setFilters={setFilters} />
        <button
          onClick={() => setShowAddFund(true)}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          Add Fund
        </button>
      </div>

      {/* Chart Section */}
      <FundSummaryChart funds={funds} />

      {/* Fund List */}
      <FundList funds={funds} filters={filters} />

      {/* Add Fund Modal */}
      {showAddFund && <AddFundModal onClose={() => setShowAddFund(false)} onAdd={handleAddFund} />}

      <Footer />
    </div>
  );
};

export default FundPage;
