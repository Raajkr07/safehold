import React, { useEffect, useRef, useState } from "react";
import { IconCommand } from '@tabler/icons-react';

const FundFilter = ({ filters, setFilters }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        if (inputRef.current) inputRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative flex flex-wrap gap-2 items-center">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={filters.search}
          onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))}
          placeholder="Search funds..."
          className="px-3 py-2 rounded-lg border text-sm w-48 h-10 bg-primary/20 border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-md font-mono flex items-center gap-1 pointer-events-none">
          <IconCommand size={14} strokeWidth={2} />
          <span className="text-sm font-semibold">A</span>
        </div>
      </div>

      <select
        value={filters.type}
        onChange={e => setFilters(prev => ({ ...prev, type: e.target.value }))}
        className="px-3 py-2 rounded-lg h-10 bg-primary/20 border text-sm"
      >
        <option value="all">All Types</option>
        <option value="Equity">Equity</option>
        <option value="Debt">Debt</option>
        <option value="Balanced">Balanced</option>
        <option value="Index">Index</option>
      </select>

      <input
        type="date"
        value={filters.dateRange.from}
        onChange={e => setFilters(prev => ({ ...prev, dateRange: { ...prev.dateRange, from: e.target.value } }))}
        className="px-3 py-2 rounded-lg h-10 bg-primary/20 border text-sm"
      />
      <input
        type="date"
        value={filters.dateRange.to}
        onChange={e => setFilters(prev => ({ ...prev, dateRange: { ...prev.dateRange, to: e.target.value } }))}
        className="px-3 py-2 rounded-lg h-10 bg-primary/20 border text-sm"
      />
    </div>
  );
};

export default FundFilter;
