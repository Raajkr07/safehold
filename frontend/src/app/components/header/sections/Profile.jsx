import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconUserCircle, IconSettings, IconLogout, IconLockSquareRounded } from '@tabler/icons-react';

const Profile = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <div className="relative dropdown-container">
      <button
        onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
        className="flex items-center font-serif text-primary justify-center w-10 bg-primary/30 h-10 rounded-full transition-all cursor-pointer border-2"
        aria-label="User menu"
      >
        RK
      </button>

      {profileDropdownOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 border-2 bg-white rounded-lg py-2"
          style={{ borderColor: 'rgba(0,0,0,0.1)' }}
        >
          <Link
            to="/profile"
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left border-none cursor-pointer hover:rounded"
            onClick={() => setProfileDropdownOpen(false)}
          >
            <IconUserCircle size={18} />
            Account
          </Link>

          <Link
            to="/settings"
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left border-none cursor-pointer hover:rounded"
            onClick={() => setProfileDropdownOpen(false)}
          >
            <IconSettings size={18} />
            Settings
          </Link>

          <Link
            to="/reset-password"
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left border-none cursor-pointer hover:rounded"
            onClick={() => setProfileDropdownOpen(false)}
          >
            <IconLockSquareRounded size={18} />
            Reset Password
          </Link>

          <div className="border-t my-1" style={{ borderColor: 'rgba(0,0,0,0.1)' }}></div>

          <Link
            to="/logout"
            className="w-full flex items-center text-red-500 gap-3 px-3 py-2 text-sm text-left border-none cursor-pointer hover:rounded"
            onClick={() => setProfileDropdownOpen(false)}
          >
            <IconLogout size={18} />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Profile;