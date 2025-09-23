import React, { useState } from 'react';
import { IconBell } from '@tabler/icons-react';

const notifications = [
  { id: 1, text: 'New message from Raj', time: '2 mins ago' },
  { id: 2, text: 'Your report is ready', time: '1 hour ago' },
  { id: 3, text: 'Server downtime scheduled', time: 'Yesterday' },
];

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        aria-label="Notifications"
        className="relative focus:outline-none flex items-center"
        style={{ height: '32px' }}
      >
        <IconBell size={28} stroke={1.5} />
        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
      </button>
      {isOpen && (
        <div className="absolute right-0 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
          <div className="p-4 font-semibold border-b border-gray-200">
            Notifications
          </div>
          <ul className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <li className="p-4 text-gray-500">No notifications</li>
            ) : (
              notifications.map(({ id, text, time }) => (
                <li
                  key={id}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                >
                  <p className="text-gray-700">{text}</p>
                  <p className="text-xs text-gray-400">{time}</p>
                </li>
              ))
            )}
          </ul>
          <div className="p-2 text-center text-sm text-blue-600 cursor-pointer hover:underline">
            View all
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
