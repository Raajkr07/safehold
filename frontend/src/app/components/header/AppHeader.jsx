import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SplitText from "../../../components/animations/SecureSpend";
import Logo from "../../../assets/logo/HeaderLogo.png";
import { IconSettings, IconUser, IconLogout, IconMenu2 } from '@tabler/icons-react';
import ThemeButton from '../../../components/header/ThemeButton';
import Navigation from './Navigation';

const AppHeader = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavigation = (tabId) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50 bg-gradient"
        style={{ height: '70px' }}
      >
        <div className="max-w-full h-full px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* LEFT SECTION - Logo */}
            <div className="flex items-center gap-4">
              {/* Mobile Burger - ONLY on mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="transition-colors p-2 cursor-pointer"
                  aria-label="Toggle mobile menu"
                >
                  <IconMenu2 size={20} />
                </button>
              </div>

              <div className="flex items-center lg:flex-1 h-full">
                <Link to="/app/dashboard" className="flex items-center gap-x-3">
                  <img src={Logo} alt="" className="h-10 w-10" />
                  <SplitText
                    text="Workplace"
                    className="text-xl font-semibold"
                    delay={150}
                    duration={0.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Navigation activeTab={activeTab} onTabChange={onTabChange} />
            </div>

            {/* RIGHT SECTION - Actions */}
            <div className="flex items-center gap-3">
              <ThemeButton />
              {/* Profile Menu */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all cursor-pointer border-none"
                  aria-label="User menu"
                  style={{ backgroundColor: 'transparent', color: 'inherit' }}
                >
                  JD
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 border rounded-lg py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                    style={{ backgroundColor: 'transparent', borderColor: 'rgba(0,0,0,0.1)' }}
                  >
                    <div className="px-3 py-2 text-xs font-medium border-b border-gray-100" style={{ color: 'inherit' }}>
                      Account
                    </div>
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left border-none cursor-pointer hover:rounded"
                      style={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                      <IconUser size={16} />
                      Profile
                    </button>
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left border-none cursor-pointer hover:rounded"
                      style={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                      <IconSettings size={16} />
                      Settings
                    </button>
                    <div className="border-t my-1" style={{ borderColor: 'rgba(0,0,0,0.1)' }}></div>
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left border-none cursor-pointer hover:rounded"
                      style={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                      <IconLogout size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border shadow z-[999] p-4 animate-in slide-in-from-top-2 duration-300" style={{ backgroundColor: 'transparent' }}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'Home', label: 'Home', icon: IconUser },
                { id: 'Ledger', label: 'Ledger', icon: IconUser },
                { id: 'fund', label: 'Fund', icon: IconUser },
                { id: 'employee', label: 'Employees', icon: IconUser },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className="flex items-center gap-3 text-left p-3 rounded cursor-pointer transition-all duration-200 text-sm font-medium w-full hover:rounded"
                    style={{ backgroundColor: 'transparent', color: 'inherit' }}
                  >
                    <IconComponent size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <style>{`
        @keyframes fade-in-0 {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoom-in-95 {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
        
        @keyframes slide-in-from-top-2 {
          from { transform: translateY(-8px); }
          to { transform: translateY(0); }
        }
        
        .animate-in {
          animation-duration: 200ms;
          animation-fill-mode: both;
        }
        
        .fade-in-0 {
          animation-name: fade-in-0;
        }
        
        .zoom-in-95 {
          animation-name: zoom-in-95;
        }
        
        .slide-in-from-top-2 {
          animation-name: slide-in-from-top-2;
        }
        
        .duration-200 {
          animation-duration: 200ms;
        }
        
        .duration-300 {
          animation-duration: 300ms;
        }
      `}</style>
    </>
  );
};

export default AppHeader;
