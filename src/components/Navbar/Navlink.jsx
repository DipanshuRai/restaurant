import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navlink = ({ to, children }) => {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
        {children}
      </NavLink>
    </li>
  );
};

export default Navlink;