import React, { useState, useEffect } from 'react';
import {
  IconCopyCheck,
  IconTrendingUp,
  IconReport,
  IconWallet,
  IconBuilding,
  IconFileAnalytics,
  IconDots,
  IconUsersGroup,
  IconHome,
  IconMenu2,
  IconX,
} from '@tabler/icons-react';

const Navigation = ({ activeTab, onTabChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleNavigationItems = [
    { id: 'Home', label: 'Home', icon: IconHome },
    { id: 'Ledger', label: 'Ledger', icon: IconCopyCheck },
    { id: 'fund', label: 'Fund', icon: IconWallet },
    { id: 'employee', label: 'Employees', icon: IconUsersGroup },
  ];

  const dropdownNavigationItems = [
    { id: 'cashflow', label: 'Cash Flow', icon: IconTrendingUp },
    { id: 'reports', label: 'Reports', icon: IconReport },
    { id: 'vendors', label: 'Vendors', icon: IconBuilding },
    { id: 'analytics', label: 'Analytics', icon: IconFileAnalytics },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavigation = (tabId) => {
    onTabChange(tabId);
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="hidden md:flex items-center justify-center rounded-full px-2 py-1">
        {visibleNavigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => handleNavigation(item.id)}
                className={`
                  flex flex-col items-center gap-1 font-medium transition-all duration-200 
                  text-xs px-4 py-3 border-none cursor-pointer min-w-[70px] relative
                  hover:rounded-lg
                `}
                style={{
                  borderRadius: isActive ? '12px 12px 0 0' : '8px',
                  boxShadow: isActive ? '0 -2px 8px rgba(0,0,0,0.1)' : 'none',
                  zIndex: isActive ? 10 : 1,
                  marginBottom: isActive ? '-2px' : '0',
                  backgroundColor: 'transparent',
                  color: 'inherit',
                }}
              >
                <IconComponent size={18} />
                <span className="font-medium">{item.label}</span>
              </button>

              {isActive && (
                <>
                  <div
                    className="absolute bottom-0 -left-3 w-3 h-3 bg-transparent"
                    style={{
                      borderBottomRightRadius: '12px',
                      boxShadow: '3px 3px 0 3px rgba(0,0,0,0.1)',
                      zIndex: 9,
                    }}
                  />
                  <div
                    className="absolute bottom-0 -right-3 w-3 h-3 bg-transparent"
                    style={{
                      borderBottomLeftRadius: '12px',
                      boxShadow: '-3px 3px 0 3px rgba(0,0,0,0.1)',
                      zIndex: 9,
                    }}
                  />
                </>
              )}
            </div>
          );
        })}

        <div className="relative dropdown-container">
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="
              flex flex-col items-center gap-1 hover:rounded-lg
              font-medium transition-all duration-200
              text-xs px-4 py-3 rounded-lg border-none cursor-pointer min-w-[60px]
            "
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <IconDots size={18} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            <span className="font-medium">More</span>
          </button>

          {dropdownOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-56 border shadow-lg rounded-xl py-2 z-50"
              style={{ backgroundColor: 'transparent' }}
            >
              <div className="px-4 py-2 text-xs font-semibold border-b" style={{ color: 'inherit', borderColor: 'rgba(0,0,0,0.1)' }}>
                More Sections
              </div>
              {dropdownNavigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 text-sm text-left border-none cursor-pointer
                      hover:rounded-lg
                    `}
                    style={{
                      backgroundColor: isActive ? 'rgba(0,0,0,0.05)' : 'transparent',
                      color: 'inherit',
                      borderLeft: isActive ? '2px solid rgba(0,0,0,0.3)' : 'none',
                    }}
                  >
                    <IconComponent size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile trigger */}
      <div className="md:hidden flex items-center justify-center w-full">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md border shadow-sm"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          style={{ backgroundColor: 'transparent', color: 'inherit', borderColor: 'rgba(0,0,0,0.2)' }}
        >
          {mobileOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
          <span className="text-sm font-medium">Menu</span>
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden w-full border-t shadow-lg"
          style={{ backgroundColor: 'transparent', borderColor: 'rgba(0,0,0,0.2)', color: 'inherit' }}
        >
          <div className="p-3 grid grid-cols-1 gap-2">
            {[...visibleNavigationItems, ...dropdownNavigationItems].map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer hover:rounded-lg"
                  style={{
                    backgroundColor: isActive ? 'rgba(0,0,0,0.05)' : 'transparent',
                    color: 'inherit',
                  }}
                >
                  <IconComponent size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
