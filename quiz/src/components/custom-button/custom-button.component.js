import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({ onClick, className, dangerouslySetInnerHTML, type, text }) => (
  <button
    type={type}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    className={`btn ${className}`}
    onClick={onClick} >
    {text}
  </button>
);

export default CustomButton;