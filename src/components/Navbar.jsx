import React, { useState } from 'react';

// Use command : npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import Title from './Navbar/Title'
import Navlink from './Navbar/Navlink'
import SignBtn from './Navbar/SignBtn'
import './Navbar/navbar.css'

function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderNavLinks = () => (
    <>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/Menu">Menu</Navlink>
      <Navlink to="/Aboutus">About Us</Navlink>
      <Navlink to="/Ourchefs">Our Chefs</Navlink>
      <Navlink to="/Contact">Contact</Navlink>
    </>
  );

  return (
    <header>
      <div className="navbar">
        <Title title="Restaurant" />
        <ul className='links'>
          {renderNavLinks()}
        </ul>
        <SignBtn />
        <div className="toggle_btn" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={isDropdownOpen ? faXmark : faBars} />
        </div>
      </div>
        <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
          {renderNavLinks()}
          <li><SignBtn /></li>
        </div>
    </header>
  )
}

export default Navbar