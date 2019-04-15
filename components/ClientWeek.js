import React from 'react';

import Timeline from './Timeline';

import days from '../utils/days';
export default function Week({
  slotsCollection,
  onClear,
  onAlertUnavailible,
  onAvailible,
  onBooked,
  onClientLookup
}) {
  const events = {
    onClear,
    onAlertUnavailible,
    onAvailible,
    onBooked,
    onClientLookup
  };
  return (
    <div>
      {days.map((day, index) => {
        return (
          <Timeline day={day} slots={slotsCollection[index]} timelineType={'client'} {...events} />
        );
      })}
    </div>
  );
}
