import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler,);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Cash Inflow',
        data: [12000, 15000, 14000, 16000, 18000, 17000, 21000, 19000],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Cash Outflow',
        data: [8000, 9000, 9500, 11000, 12000, 11500, 13000, 12500],
        borderColor: '#f87171',
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#6b7280',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#6b7280' },
        grid: { color: 'rgba(107, 114, 128, 0.1)' },
      },
      y: {
        ticks: { color: '#6b7280' },
        grid: { color: 'rgba(107, 114, 128, 0.1)' },
      },
    },
  };

const CashFlowChart = () => {
  return (
    <div className="rounded-xl p-6 shadow border border-gray-300 h-96 flex flex-col">
      <h3 className="text-lg font-semibold mb-4">
        Cash Flow Overview
      </h3>
      <div className="h-full flex items-center justify-center">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CashFlowChart;
