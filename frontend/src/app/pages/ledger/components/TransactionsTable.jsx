import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { MoreHorizontal, Trash } from 'lucide-react'


export default function TransactionsTable({ transactions, onDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto">
                <thead className="text-xs text-secondary">
                    <tr>
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Description</th>
                        <th className="text-left p-2">Category</th>
                        <th className="text-right p-2">Amount</th>
                        <th className="text-center p-2">Type</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(tx => (
                        <tr key={tx.id} className="border-t">
                            <td className="p-2 align-top">{format(new Date(tx.date), 'MMM d, yyyy')}</td>
                            <td className="p-2 align-top">{tx.description}</td>
                            <td className="p-2 align-top">{tx.category}</td>
                            <td className="p-2 align-top text-right">{tx.amount.toLocaleString(undefined, { style: 'currency', currency: 'INR' })}</td>
                            <td className={`p-2 align-top text-center ${tx.type === 'income' ? 'text-success' : 'text-danger'}`}>{tx.type}</td>
                            <td className="p-2 align-top">
                                <div className="flex items-center gap-2 justify-end">
                                    <button aria-label="more" className="p-1 rounded hover:bg-accent/20">
                                        <MoreHorizontal size={16} />
                                    </button>
                                    <button onClick={() => onDelete(tx.id)} aria-label="delete" className="p-1 rounded hover:bg-accent/20">
                                        <Trash size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {transactions.length === 0 && (
                        <tr>
                            <td colSpan={6} className="p-6 text-center text-secondary">No transactions found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

TransactionsTable.propTypes = {
    transactions: PropTypes.array.isRequired,
    onDelete: PropTypes.func
}