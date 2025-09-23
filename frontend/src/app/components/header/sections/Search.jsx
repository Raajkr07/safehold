import React, { useEffect, useRef } from 'react';
import { IconSearch, IconCommand } from '@tabler/icons-react';

const Search = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
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
    <div className="relative max-w-52 mx-auto">
      <IconSearch 
        size={20} 
        stroke={1.5} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="w-full h-8 pl-10 pr-20 bg-primary/25 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-md font-mono select-none flex items-center space-x-1">
        <IconCommand size={18} stroke={2} />
        <span className='font-bold text-[16px]'>S</span>
      </div>
    </div>
  );
}

export default Search;