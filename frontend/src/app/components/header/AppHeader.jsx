import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SplitText from "../../../components/animations/SecureSpend";
import Logo from "../../../assets/logo/HeaderLogo.png";
import {
  IconClipboardText,
  IconWallet,
  IconUsersGroup,
  IconHome,
  IconMenu2,
} from '@tabler/icons-react';
import Profile from './sections/Profile';
import ThemeButton from '../../../components/header/ThemeButton';
import Search from './sections/Search';
import Navigation from './sections/Navigation';
import Notification from './sections/Notification';
import Calendar from './sections/Calender';

const AppHeader = ({ onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

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
    <header
      className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50 bg-gradient"
      style={{ height: '70px' }}
    >
      <div className="max-w-full h-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* LEFT SECTION - Logo + Mobile Hamburger */}
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

            {/* Logo */}
            <div className="flex items-center lg:flex-1 h-full">
              <Link to="/app/dashboard" className="flex items-center gap-x-3">
                <img src={Logo} alt="" className="h-10 w-10" />
                <SplitText
                  text="Workplace"
                  className="text-xl text-primary font-mono font-semibold hidden sm:block"
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

            {/* Search - hide on mobile */}
            <div className="hidden md:block">
              <Search />
            </div>
          </div>

          {/* Navigation - hide on mobile */}
          <div className="hidden md:block">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Right section - profile always visible */}
          <div className="flex items-center gap-4">
            <Notification className="hidden md:block" />
            <Calendar className="hidden md:block" />
            <ThemeButton className="hidden md:block" />
            <Profile />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border shadow z-[999] p-4" style={{ backgroundColor: 'transparent' }}>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'Home', label: 'Home', icon: IconHome, href: "/app/dashboard" },
              { id: 'Ledger', label: 'Ledger', icon: IconClipboardText, href: "/app/ledger" },
              { id: 'fund', label: 'Fund', icon: IconWallet, href: "#" },
              { id: 'team', label: 'Team', icon: IconUsersGroup, href: "#" },
            ].map((item) => {
              const IconComponent = item.icon;
              const link = item.href;
              return (
                <Link
                  to={link}
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="flex items-center gap-3 text-left p-3 rounded cursor-pointer transition-all duration-200 text-sm font-medium w-full hover:rounded"
                  style={{ backgroundColor: 'transparent', color: 'inherit' }}
                >
                  <IconComponent size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
