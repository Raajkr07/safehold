import React from 'react';

const funds = [
    { name: 'Equity Fund', amount: 2500000, status: 'active' },
    { name: 'Debt Fund', amount: 900000, status: 'active' },
    { name: 'Balanced Fund', amount: 1000000, status: 'expired' },
    { name: 'Index Fund', amount: 500000, status: 'active' },
    { name: 'International Fund', amount: 750000, status: 'expired' },
];

const FundKPI = () => {

  const totalFunds = funds.length;
  const activeFunds = funds.filter(f => f.status === 'active').length;
  const expiredFunds = funds.filter(f => f.status === 'expired').length;
  const totalAmount = funds.reduce((sum, f) => sum + f.amount, 0);

  const kpis = [
    { id: 'k1', label: 'Total Funds', value: totalFunds },
    { id: 'k2', label: 'Active Funds', value: activeFunds },
    { id: 'k3', label: 'Expired Funds', value: expiredFunds },
    { id: 'k4', label: 'Total Amount', value: `₹${totalAmount.toLocaleString()}` },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 mb-6">
      {kpis.map(k => (
        <div key={k.id} className="p-4 bg-muted border-2 border-gray-400 rounded-lg shadow hover:shadow-md transition">
          <p className="text-sm text-secondary">{k.label}</p>
          <p className="text-lg font-semibold text-primary">{k.value}</p>
        </div>
      ))}
    </div>
  );
};

export default FundKPI;
