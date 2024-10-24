
import React from 'react';
import './Backdrop.css';

const Backdrop = ({ show, onClose }) => {
  return (
    show ? <div className="backdrop" onClick={onClose}></div> : null
  );
};

export default Backdrop;
