import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Salaries', 'Office Rent', 'Software Licenses', 'Marketing', 'Travel', 'Miscellaneous'],
    datasets: [
      {
        label: 'Expenses',
        data: [45000, 20000, 10000, 8000, 5000, 3000],
        backgroundColor: [
          '#4ade80', // green
          '#60a5fa', // blue
          '#facc15', // yellow
          '#f472b6', // pink
          '#34d399', // teal
          '#c084fc', // purple
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '60%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#6b7280', // text-gray-500
          boxWidth: 15,
        },
      },
    },
  };

const ExpenseCategories = () => {
  return (
    <div className="rounded-xl p-6 shadow border border-gray-300 flex flex-col">
      <h3 className="text-lg font-semibold">
        Expense Categories
      </h3>
      <div className="h-full flex items-center justify-center">
        <Doughnut data={data} options={options}/>
      </div>
    </div>
  );
};

export default ExpenseCategories;
