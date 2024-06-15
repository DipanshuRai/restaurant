import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Title from './Navbar/Title';
import Navlink from './Navbar/Navlink';
import SignBtn from './Navbar/SignBtn';
import './Navbar/navbar.css';

function Navbar({ setIsLoginVisible, setIsBookTableVisible }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLogin = () => {
    setIsLoginVisible((prev) => !prev);
    setIsBookTableVisible(false); // Ensure Book Table is closed when Login is opened
  };

  const toggleBookTable = () => {
    setIsBookTableVisible((prev) => !prev);
    setIsLoginVisible(false); // Ensure Login is closed when Book Table is opened
  };

  const renderNavLinks = () => (
    <>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/menu">Menu</Navlink>
      <Navlink to="/about-us">About Us</Navlink>
      <Navlink to="/our-chefs">Our Chefs</Navlink>
      <Navlink to="/contact">Contact</Navlink>
    </>
  );

  return (
    <header>
      <div className="navbar">
        <Title title="Restaurant" />
        <ul className="links">
          {renderNavLinks()}
        </ul>
        <SignBtn className='SubmitBtn' onClick={toggleLogin} text="Login" />
        <SignBtn className='SubmitBtn' onClick={toggleBookTable} text="Book a Table" />
        <div className="toggle_btn" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={isDropdownOpen ? faXmark : faBars} />
        </div>
      </div>
      <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
        {renderNavLinks()}
        <li><SignBtn className='SubmitBtn' onClick={toggleLogin} text="Login" /></li>
        <li><SignBtn className='SubmitBtn' onClick={toggleBookTable} text="Book a Table" /></li>
      </div>
    </header>
  );
}

export default Navbar;
