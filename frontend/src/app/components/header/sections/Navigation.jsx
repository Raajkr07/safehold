import React, { useState, useEffect } from 'react';
import {
  IconClipboardText,
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
  IconDeviceHeartMonitor,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ onTabChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const visibleNavigationItems = [
    { id: 'Home', label: 'Home', icon: IconHome, href: "/app/dashboard" },
    { id: 'Ledger', label: 'Ledger', icon: IconClipboardText, href: "/app/ledger" },
    { id: 'fund', label: 'Fund', icon: IconWallet, href: "/app/fund" },
    { id: 'health', label: 'Health', icon: IconDeviceHeartMonitor, href: "/app/health" },
  ];

  const dropdownNavigationItems = [
    { id: 'cashflow', label: 'Cash Flow', icon: IconTrendingUp, href: "#" },
    { id: 'reports', label: 'Reports', icon: IconReport, href: "#" },
    { id: 'team', label: 'Team', icon: IconUsersGroup, href: "#" },
    { id: 'vendors', label: 'Vendors', icon: IconBuilding, href: "#" },
    { id: 'analytics', label: 'Analytics', icon: IconFileAnalytics, href: "#" },
  ];

  const allItems = [...visibleNavigationItems, ...dropdownNavigationItems];
  const activeItem = allItems.find((item) => location.pathname.startsWith(item.href));
  const activeTab = activeItem ? activeItem.id : 'Home';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (onTabChange) {
      onTabChange(activeTab);
    }
  }, [activeTab, onTabChange]);

  const handleNavigation = (tabId) => {
    if (onTabChange) onTabChange(tabId);
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center rounded-full px-2 py-1">
        {visibleNavigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          const link = item.href;

          return (
            <Link
              to={link}
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                flex flex-col items-center gap-1 text-xs px-4 py-3 min-w-[70px]
                transition-all duration-200 cursor-pointer hover:scale-110
                ${isActive ? 'text-green-600 bg-green-100 shadow-md rounded-xl' : 'hover:bg-gray-100 hover:rounded-xl'}
              `}
            >
              <IconComponent size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* More Dropdown */}
        <div className="relative dropdown-container">
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className={`
              flex flex-col items-center gap-1 text-xs px-4 py-3 min-w-[60px]
              transition-all duration-200 cursor-pointer
              ${dropdownOpen ? 'text-green-600 bg-green-100 shadow-md rounded-xl' : 'hover:bg-gray-100 hover:rounded-lg'}
            `}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <IconDots
              size={18}
              className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
            <span className="font-medium">More</span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white border shadow-lg rounded-xl py-2 z-50">
              {dropdownNavigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 text-sm text-left rounded-lg transition
                      ${isActive ? 'bg-green-100 text-green-700 shadow-sm' : 'hover:bg-gray-100'}
                    `}
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

      {/* Mobile Navigation Trigger */}
      <div className="md:hidden flex items-center justify-center w-full mt-4">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md border shadow-sm text-sm font-medium"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
          Menu
        </button>
      </div>

      {/* Mobile Navigation Sheet */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden w-full border-t shadow-lg mt-2 bg-white"
        >
          <div className="p-3 grid grid-cols-1 gap-2">
            {[...visibleNavigationItems, ...dropdownNavigationItems].map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-3 rounded-lg transition
                    ${isActive ? 'bg-green-100 text-green-700 shadow-sm' : 'hover:bg-gray-100'}
                  `}
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
