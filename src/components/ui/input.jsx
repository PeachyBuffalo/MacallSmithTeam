import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input className={`border px-2 py-1 rounded ${className}`} {...props} />
  );
};

export default Input;
