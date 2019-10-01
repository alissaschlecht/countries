import React from 'react';
import './Button.scss';

const Button = ({ text, onClick, type, disabled }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className="button"
  >
    {text}
  </button>
);

export default Button;