import React from 'react';

const QA = () => {
  const actions = [
    'Add New Expense',
    'Upload Receipt', 
    'Create Budget',
    'Generate Report'
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`
              w-full text-left p-3 rounded-lg border border-gray-200
              hover:border-[#53D347] hover:bg-[#53D347]/5
              transition-all duration-200 text-sm font-medium
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
