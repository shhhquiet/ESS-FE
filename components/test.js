import React from 'react';

export default function Test({ data: { thingOne, thingTwo }, onDoAThing }) {
  return (
    <div
      style={{ height: '300px', width: '300px', backgroundColor: 'pink' }}
      onClick={() => onDoAThing}
    >
      Hi der. {thingOne} {thingTwo}{' '}
    </div>
  );
}
