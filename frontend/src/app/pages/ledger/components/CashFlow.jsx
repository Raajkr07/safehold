import React from 'react'
import PropTypes from 'prop-types'
import { ArrowUp, ArrowDown } from 'lucide-react'


export default function CashFlowCard({ title, amount, delta, tone = 'neutral' }) {
    const isPos = delta >= 0
    const deltaClass = tone === 'danger' ? 'text-danger' : tone === 'success' ? 'text-success' : isPos ? 'text-success' : 'text-danger'


    return (
        <div className="p-4 bg-card rounded-2xl shadow border border-gray-300">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-secondary">{title}</p>
                    <p className="text-xl font-medium hover:text-primary">{amount.toLocaleString(undefined, { style: 'currency', currency: 'INR' })}</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`${deltaClass} text-sm flex items-center gap-1`}>
                        {isPos ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
                        {Math.abs(delta)}%
                    </span>
                </div>
            </div>
        </div>
    )
}


CashFlowCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    delta: PropTypes.number,
    tone: PropTypes.oneOf(['neutral', 'danger', 'success'])
}