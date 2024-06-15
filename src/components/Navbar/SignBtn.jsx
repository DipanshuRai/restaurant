import React from 'react';
import './navbar.css';

const SignBtn = ({ onClick, text }) => (
  <button className="action_btn" onClick={onClick}>
    {text}
  </button>
);

export default SignBtn;
