"use client";
import React from 'react';

const CreditControls = ({ onAdd, onSubtract }) => {
  return (
    <div>
      <button onClick={onAdd}>Add Credit</button>
      <button onClick={onSubtract}>Subtract Credit</button>
    </div>
  );
};

export default CreditControls;