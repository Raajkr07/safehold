import React from 'react';

const RecentAlerts = () => {
  const alerts = [
    {
      message: 'Budget limit approaching for Marketing',
      type: 'warning',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400'
    },
    {
      message: 'Payment received from Client Raj',
      type: 'success',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400'
    },
    {
      message: 'Monthly report ready for review',
      type: 'info',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400'
    }
  ];

  return (
    <div className="rounded-xl p-6 shadow border bg-gray-700 border-gray-300">
      <h3 className="text-lg text-white font-semibold mb-4">
        Recent Alerts
      </h3>
      <div className="space-y-3">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`p-3 ${alert.bgColor} border-l-4 ${alert.borderColor} rounded text-sm`}
          >
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAlerts;