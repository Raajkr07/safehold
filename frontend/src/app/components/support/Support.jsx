import React from 'react';

const Support = () => {
  return (
    <div className="w-full pb-3  px-6 bottom-0 left-0 flex justify-center space-x-8 shadow-lg">
      <div className="flex justify-center space-x-4 mt-2 text-xs text-muted-foreground">
        <a href="/not-found" className="hover:text-primary transition-colors" rel="noopener noreferrer">
          Help Center
        </a>
        <span>•</span>
        <a href="/not-found" className="hover:text-primary transition-colors" rel="noopener noreferrer">
          Report an Issue
        </a>
        <span>•</span>
        <a href="/not-found" className="hover:text-primary transition-colors" rel="noopener noreferrer">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default Support;
