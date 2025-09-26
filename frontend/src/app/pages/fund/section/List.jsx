import React, { useState } from 'react';

const FundList = () => {
  // Sample fund data
  const funds = [
    { id: 1, name: 'Equity Fund', type: 'Equity', amount: 250000, status: 'active', startDate: '2023-01-01', endDate: '2024-01-01' },
    { id: 2, name: 'Debt Fund', type: 'Debt', amount: 150000, status: 'active', startDate: '2022-05-15', endDate: '2023-05-15' },
    { id: 3, name: 'Balanced Fund', type: 'Balanced', amount: 100000, status: 'expired', startDate: '2021-03-01', endDate: '2022-03-01' },
    { id: 4, name: 'Index Fund', type: 'Index', amount: 50000, status: 'active', startDate: '2023-06-01', endDate: '2024-06-01' },
    { id: 5, name: 'International Fund', type: 'Equity', amount: 75000, status: 'expired', startDate: '2020-09-01', endDate: '2021-09-01' },
  ];

  // Default filters
  const [filters] = useState({
    type: 'all', // all, Equity, Debt, Balanced, Index
    search: '',
    dateRange: { from: '', to: '' },
  });

  // Simple filter logic
  const filteredFunds = funds.filter(fund => {
    const matchesType = filters.type === 'all' || fund.type === filters.type;
    const matchesSearch = fund.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesDate =
      (!filters.dateRange.from || new Date(fund.startDate) >= new Date(filters.dateRange.from)) &&
      (!filters.dateRange.to || new Date(fund.endDate) <= new Date(filters.dateRange.to));

    return matchesType && matchesSearch && matchesDate;
  });

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border rounded-lg">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-2 text-left">Fund Name</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Start Date</th>
            <th className="px-4 py-2 text-left">End Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredFunds.map(fund => (
            <tr key={fund.id} className="border-b hover:bg-muted/50 transition">
              <td className="px-4 py-2">{fund.name}</td>
              <td className="px-4 py-2">{fund.type}</td>
              <td className="px-4 py-2">₹{fund.amount.toLocaleString()}</td>
              <td className="px-4 py-2 capitalize">{fund.status}</td>
              <td className="px-4 py-2">{fund.startDate}</td>
              <td className="px-4 py-2">{fund.endDate}</td>
            </tr>
          ))}
          {filteredFunds.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-4 text-muted">
                No funds found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FundList;
