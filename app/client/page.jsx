'use client';

import React, { useState } from 'react';

const Client = () => {
  const [count, setCount] = useState(5);
  return (
    <div className="  max-w-6xl w-64 flex h-screen justify-center items-center mx-auto">
      <div className=" flex gap-6 items-center">
        <button className="btn  btn-primary">+</button>
        <h1 className="text-7xl font-bold mb-4">{count}</h1>
        <button onClick={() => setCount(count + 1)} className="btn btn-primary">
          -
        </button>
      </div>
    </div>
  );
};

export default Client;
