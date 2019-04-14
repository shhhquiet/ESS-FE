import React from 'react';

import Timeline from './Timeline';

import days from '../utils/days';

export default function AdminWeek() {
  return (
    <div>
      {days.map((day, index) => {
        return <Timeline day={day} />;
      })}
    </div>
  );
}
