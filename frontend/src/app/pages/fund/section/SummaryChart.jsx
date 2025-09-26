import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const sampleFunds = [
  { name: 'Equity Fund', amount: 2500000 },
  { name: 'Debt Fund', amount: 900000 },
  { name: 'Balanced Fund', amount: 1000000 },
  { name: 'Index Fund', amount: 500000 },
  { name: 'International Fund', amount: 750000 },
];

const FundSummaryChart = () => {
  const data = {
    labels: sampleFunds.map(f => f.name),
    datasets: [
      {
        label: 'Amount (₹)',
        data: sampleFunds.map(f => f.amount),
        backgroundColor: '#4ade80',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.raw.toLocaleString()}`,
        },
      },
      title: {
        display: true,
        text: 'Fund',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="w-full my-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default FundSummaryChart;
