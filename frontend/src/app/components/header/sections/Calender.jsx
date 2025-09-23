import React, { useState } from 'react';
import { IconCalendarWeek } from '@tabler/icons-react';

const workSchedule = {
  '2025-09-02': ['Client Meeting at 10 AM', 'Prepare report'],
  '2025-09-07': ['Project deadline'],
  '2025-09-15': ['Team review call'],
  '2025-09-20': ['Submit invoice'],
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function formatDate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function CalendarPanel() {
  const year = 2025;
  const month = 8;

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const weeks = [];
  let dayCounter = 1 - firstDay;

  for (let week = 0; week < 6; week++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      if (dayCounter > 0 && dayCounter <= daysInMonth) {
        days.push(dayCounter);
      } else {
        days.push(null);
      }
      dayCounter++;
    }
    weeks.push(days);
  }

  return (
    <div className="w-80 p-4 bg-white rounded shadow-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-4 text-gray-700">
        <IconCalendarWeek size={24} stroke={1.5} />
        <h2 className="text-lg font-semibold">September 2025</h2>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="text-xs font-semibold text-gray-500 border-b border-gray-200">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <th key={day} className="py-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, idx) => {
                const dateKey = day ? formatDate(year, month, day) : null;
                const hasWork = dateKey && workSchedule[dateKey];
                return (
                  <td
                    key={idx}
                    className={`py-3 px-1 border border-gray-100 align-top cursor-default relative
                      ${hasWork ? 'bg-green-50' : ''}
                      ${day === new Date().getDate() &&
                      month === new Date().getMonth() &&
                      year === new Date().getFullYear()
                        ? 'font-bold underline'
                        : ''}
                    `}
                    title={hasWork ? workSchedule[dateKey].join('\n') : ''}
                  >
                    <div className="text-sm">{day || ''}</div>
                    {hasWork && (
                      <div className="flex justify-center mt-1 space-x-1">
                        {workSchedule[dateKey].map((_, i) => (
                          <span key={i} className="w-2 h-2 rounded-full bg-green-600"></span>
                        ))}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Calendar = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowPanel(true)}
      onMouseLeave={() => setShowPanel(false)}
    >
      <IconCalendarWeek size={32} stroke={1.5} className="cursor-pointer" />
      
      {showPanel && (
        <div
          className="absolute top-full right-0 z-10"
          style={{ minWidth: '320px' }}
        >
          <CalendarPanel />
        </div>
      )}
    </div>
  );
}

export default Calendar;