import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'


export default function IncomeExpenseForm({ onAdd }) {
    const [form, setForm] = useState({ description: '', amount: '', category: '', date: '', type: 'expense' })


    function submit(e) {
        e.preventDefault()
        const amount = parseFloat(form.amount)
        if (!form.description || isNaN(amount) || !form.date) return
        onAdd({ id: uuidv4(), ...form, amount })
        setForm({ description: '', amount: '', category: '', date: '', type: 'expense' })
    }


    return (
        <form onSubmit={submit} className="space-y-3">
            <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" className="w-full px-3 py-2 bg-primary/20 rounded-lg border" />
            <div className="grid grid-cols-2 gap-2">
                <input value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} placeholder="Amount" className="px-3 py-2 bg-primary/20 rounded-lg border" />
                <input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} placeholder="Category" className="px-3 py-2 bg-primary/20 rounded-lg border" />
            </div>
            <div className="flex gap-2">
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="px-3 py-2 bg-primary/20 rounded-lg border" />
                <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="px-3 py-2 bg-primary/20 rounded-lg border">
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-white font-bold">Add</button>
            </div>
        </form>
    )
}


IncomeExpenseForm.propTypes = {
    onAdd: PropTypes.func.isRequired
}