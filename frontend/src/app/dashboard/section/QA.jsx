import React from 'react';

const QA = () => {
  const actions = [
    'Add New Expense',
    'Upload Receipt', 
    'Create Budget',
    'Generate Report'
  ];

  return (
    <div className=" rounded-xl p-6 shadow-sm border border-gray-300">
      <h3 className="text-lg font-semibold mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`
              w-full text-left p-3 rounded-lg border border-gray-300
              hover:border-primary hover:bg-primary/5
              transition-all duration-200 text-sm font-medium hover:scale-105
            `}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QA;
