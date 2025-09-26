import React, { useState } from 'react';
import AddExpense from './quickActions/AddExpense';
import UploadReceipt from "./quickActions/UploadReceipt";
import CreateBudget from "./quickActions/CreateBudget";
import GenerateReport from "./quickActions/GenerateReport";

const QA = () => {
  const actions = [
    'Add New Expense',
    'Upload Receipt',
    'Create Budget',
    'Generate Report',
  ];

  const [activeModal, setActiveModal] = useState(null);

  const handleActionClick = (action) => {
    if (action === "Add New Expense") setActiveModal("expense");
    if (action === "Upload Receipt") setActiveModal("receipt");
    if (action === "Create Budget") setActiveModal("budget");
    if (action === "Generate Report") setActiveModal("report");
  };

  return (
    <div className=" rounded-xl p-6 shadow-sm border border-gray-300">
      <h3 className="text-lg font-semibold mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleActionClick(action)}
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

      {activeModal === 'expense' && (
        <AddExpense
          onClose={() => setActiveModal(null)}
          onAdd={(data) => console.log('Expense added:', data)}
        />
      )}

      {activeModal === "receipt" && (
        <UploadReceipt 
        onClose={() => setActiveModal(null)} 
        onUpload={(f) => console.log("Receipt:", f)} />
      )}
      
      {activeModal === "budget" && (
        <CreateBudget 
        onClose={() => setActiveModal(null)} 
        onCreate={(b) => console.log("Budget:", b)} />
      )}
      
      {activeModal === "report" && (
        <GenerateReport 
        onClose={() => setActiveModal(null)} 
        onGenerate={(r) => console.log("Report:", r)} />
      )}
    </div>
  );
};

export default QA;
