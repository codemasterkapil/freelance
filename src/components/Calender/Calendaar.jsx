// Calendar.js

import React from 'react';

const Calendar = ({ events, onDateHover }) => {
  // Function to generate a range of days in a month
  const getDaysInMonth = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) =>
      new Date(year, month, i + 1).toISOString().split('T')[0]
    );
  };

  // Generate the calendar grid
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  // Ensure there are enough days for a 7x5 grid
  while (daysInMonth.length < 35) {
    daysInMonth.push(null); // Add placeholders for empty cells
  }

  return (
    <div className="calendar">
      {daysInMonth.map((date, index) => (
        <div
          key={index}
          className={`date-cell ${date ? 'active' : 'inactive'}`}
          onMouseEnter={() => date && onDateHover(date)}
        >
          {date}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
