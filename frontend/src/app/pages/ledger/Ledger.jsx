import React, { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Cards'
import Header from '../../components/header/AppHeader';
import Footer from '../../../components/footer/AppFooter';
import CashFlowCard from './components/CashFlow'
import KPISection from './components/KPI'
import TransactionsTable from './components/TransactionsTable'
import Filters from './components/Filters'
import IncomeExpenseForm from './components/IncomeExpenseForm'
import SmallAreaChart from './components/AreaCharts'
import { mockTransactions, mockKpis } from './data/MockData'
import DropImage from './components/ImageFetch';


export default function LedgerPage() {
    const [transactions, setTransactions] = useState(mockTransactions)
    const [query, setQuery] = useState('')
    const [dateRange, setDateRange] = useState({ from: null, to: null })
    const [typeFilter, setTypeFilter] = useState('all')

    function handleAdd(entry) {
        // entry has { id, description, amount, date, category, type, imageUrl, ... }
        setTransactions(prev => [entry, ...prev]);
        // Optionally persist to backend/localStorage
    }


    const totals = useMemo(() => {
        const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0)
        const expense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
        return { income, expense, net: income - expense }
    }, [transactions])


    function handleAddTransaction(newTx) {
        setTransactions(prev => [newTx, ...prev])
    }


    function handleDelete(id) {
        setTransactions(prev => prev.filter(t => t.id !== id))
    }


    const filtered = useMemo(() => {
        return transactions.filter(t => {
            if (typeFilter !== 'all' && t.type !== typeFilter) return false
            if (query && !`${t.description} ${t.category}`.toLowerCase().includes(query.toLowerCase())) return false
            if (dateRange.from && new Date(t.date) < new Date(dateRange.from)) return false
            if (dateRange.to && new Date(t.date) > new Date(dateRange.to)) return false
            return true
        })
    }, [transactions, typeFilter, query, dateRange])


    return (
        <div className="p-6 space-y-6 mt-20">
            <Header />
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center gap-3 w-full">
                    <div className="flex-shrink-0 w-full lg:w-auto">
                        <SmallAreaChart data={transactions.slice(0, 12)} />
                    </div>

                    <div className="flex-1 w-full">
                        <Filters
                            query={query}
                            setQuery={setQuery}
                            dateRange={dateRange}
                            setDateRange={setDateRange}
                            typeFilter={typeFilter}
                            setTypeFilter={setTypeFilter}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CashFlowCard title="Income" amount={totals.income} delta={+8.3} />
                        <CashFlowCard title="Expenses" amount={totals.expense} delta={-5.2} tone="danger" />
                        <CashFlowCard title="Net P&L" amount={totals.net} delta={3.1} tone={totals.net >= 0 ? 'success' : 'danger'} />
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <TransactionsTable transactions={filtered} onDelete={handleDelete} />
                        </CardContent>
                    </Card>
                </div>
                <aside className="space-y-6">
                    <KPISection kpis={mockKpis} />
                    {/* <Card>
                        <CardHeader>
                            <CardTitle>Add Transaction</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <IncomeExpenseForm onAdd={handleAddTransaction} />
                        </CardContent>
                    </Card> */}
                </aside>
            </div>
            <div className="max-w-screen-lg mx-auto px-4 py-6">
                <DropImage onAdd={handleAdd} />
            </div>
            <Footer />
        </div>
    )
}