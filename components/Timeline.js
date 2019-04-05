import React from 'react';

export default function Timeline({ slots }) {
  return (
    <div>
      {slots.map(slot => {
        return (
          <div
            style={{
              height: '100px',
              width: '200px',
              backgroundColor: 'red',
              border: '1px solid black'
            }}
            className={`slot ${slot}`}
          />
        );
      })}
    </div>
  );
}
