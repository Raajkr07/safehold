import React, { useState } from "react";

const CreateBudget = ({ onClose, onCreate }) => {
  const [form, setForm] = useState({
    category: "general",
    amount: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ ...form, id: `b${Date.now()}` });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create Budget</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <select
            value={form.category}
            onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="general">General</option>
            <option value="travel">Travel</option>
            <option value="software">Software</option>
            <option value="office">Office</option>
            <option value="rent">Rent</option>
            <option value="others">Others</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm((prev) => ({ ...prev, amount: Number(e.target.value) }))}
            className="px-3 py-2 border rounded-lg"
            required
          />

          <div className="flex gap-2">
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm((prev) => ({ ...prev, startDate: e.target.value }))}
              className="px-3 py-2 border rounded-lg flex-1"
              required
            />
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm((prev) => ({ ...prev, endDate: e.target.value }))}
              className="px-3 py-2 border rounded-lg flex-1"
              required
            />
          </div>

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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBudget;
