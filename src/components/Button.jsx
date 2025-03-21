// src/components/Button.jsx
import React from 'react';

function Button({ children, onClick, className }) {
  return (
    <button className={`add-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;