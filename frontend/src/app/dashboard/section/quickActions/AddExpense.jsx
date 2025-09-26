import React, { useState } from 'react';

const AddExpense = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    category: 'general',
    amount: '',
    date: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: `e${Date.now()}` });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Expense Title"
            value={form.title}
            onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
            required
          />
          <select
            value={form.category}
            onChange={e => setForm(prev => ({ ...prev, category: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="general">General</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="office">Office</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={e => setForm(prev => ({ ...prev, amount: Number(e.target.value) }))}
            className="px-3 py-2 border rounded-lg"
            required
          />
          <input
            type="date"
            value={form.date}
            onChange={e => setForm(prev => ({ ...prev, date: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
            required
          />
          <textarea
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={e => setForm(prev => ({ ...prev, notes: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
            rows={3}
          />
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
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;