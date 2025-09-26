import React, { useState } from 'react';

const AddFundModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    type: 'investment',
    amount: '',
    status: 'active',
    startDate: '',
    endDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: `f${Date.now()}` });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Add New Fund</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Fund Name"
            value={form.name}
            onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
            required
          />
          <select
            value={form.type}
            onChange={e => setForm(prev => ({ ...prev, type: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="investment">Investment</option>
            <option value="loan">Loan</option>
            <option value="grant">Grant</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={e => setForm(prev => ({ ...prev, amount: Number(e.target.value) }))}
            className="px-3 py-2 border rounded-lg"
            required
          />
          <div className="flex gap-2">
            <input
              type="date"
              value={form.startDate}
              onChange={e => setForm(prev => ({ ...prev, startDate: e.target.value }))}
              className="px-3 py-2 border rounded-lg flex-1"
              required
            />
            <input
              type="date"
              value={form.endDate}
              onChange={e => setForm(prev => ({ ...prev, endDate: e.target.value }))}
              className="px-3 py-2 border rounded-lg flex-1"
              required
            />
          </div>
          <select
            value={form.status}
            onChange={e => setForm(prev => ({ ...prev, status: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="active">Active</option>
            <option value="expired">Expired</option>
          </select>
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
            >
              Add Fund
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFundModal;
