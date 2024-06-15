import React from 'react';
import './navbar.css';

const SignBtn = ({ onClick, text }) => (
  <button className="sign-btn" onClick={onClick}>
    {text}
  </button>
);

export default SignBtn;
