import React from 'react';

const Textarea = ({ className, ...props }) => {
  return (
    <textarea className={`border px-2 py-1 rounded ${className}`} {...props} />
  );
};

export default Textarea;
