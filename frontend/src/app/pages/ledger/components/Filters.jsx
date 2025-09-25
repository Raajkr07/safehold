import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types'
import { IconCommand } from '@tabler/icons-react';

export default function Filters({ query, setQuery, dateRange, setDateRange, typeFilter, setTypeFilter }) {
    const inputRef = useRef(null);

    useEffect(() => {
        function handleKeyDown(e) {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
            e.preventDefault();
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
        <div className="flex flex-wrap gap-2 w-full">
            <div className="relative flex-1 min-w-[200px] max-w-md">
                <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search transactions..."
                    className="w-full px-3 py-2 pr-16 h-10 rounded-lg border bg-primary/20 text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                />

                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-md font-mono flex items-center gap-1">
                    <IconCommand size={14} strokeWidth={2} />
                    <span className="text-sm font-semibold">A</span>
                </div>
            </div>

            <select 
                value={typeFilter} 
                onChange={e => setTypeFilter(e.target.value)} 
                className="px-3 py-2 h-10 bg-primary/20 rounded-lg border text-sm flex-shrink-0"
            >
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expenses</option>
            </select>

            <input
                type="date"
                value={dateRange.from || ''}
                onChange={e => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                className="px-3 py-2 rounded-lg h-10 bg-primary/20 border text-sm flex-shrink-0"
            />

            <input
                type="date"
                value={dateRange.to || ''}
                onChange={e => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                className="px-3 py-2 rounded-lg h-10 bg-primary/20 border text-sm flex-shrink-0"
            />
        </div>
    )
}

Filters.propTypes = {
    query: PropTypes.string,
    setQuery: PropTypes.func,
    dateRange: PropTypes.object,
    setDateRange: PropTypes.func,
    typeFilter: PropTypes.string,
    setTypeFilter: PropTypes.func
}
