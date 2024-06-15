import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import Separator from "./Footer/sub-components/separator.svg";

const Footer = () => {
  return (
    <footer className="footer section text-center">
      <div className="container">
        <div className="footer-top grid-list">

          {/* Center Box */}
          <div className="footer-brand has-before has-after">
            <Link to="/" className="logo">
              Our Restaurant
            </Link>
            <div className='text'>
              <address className="body-4">
                IIIT Guwahati, Kamrup, Guwahati, India
              </address>
              <Link to="/" className="body-4 contact-link">
                webdevteam@iiitg.com
              </Link>
              <Link to="/" className="body-4 contact-link">
                Booking Request : +91 123-XXXXX-69
              </Link>
              <p className="body-4">Open : 09:00 am - 10:00 pm</p>
            </div>
            <div className="wrapper">
              <img src={Separator} width="30%" alt="" />
            </div>
            <p className="title-1">Get News & Offers</p>
            <p className="label-1">
              Subscribe us & Get <span className="span">25% Off.</span>
            </p>
            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <IoMdMail className="react-icon" aria-hidden="true" />
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className='btn-text'>SUBSCRIBE</span></button>
            </form>
          </div>

          {/* Left List */}
          <ul className="footer-list list-1">
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Menu" className="label-2 footer-link hover-underline">
                Menus
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" className="label-2 footer-link hover-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Ourchefs" className="label-2 footer-link hover-underline">
                Our Chefs
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="label-2 footer-link hover-underline">
                Contact
              </Link>
            </li>
          </ul>


          {/* Right List */}
          <ul className="footer-list list-2">
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">
                Youtube
              </Link>
            </li>
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">
                Google Map
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Web Dev Team. All Rights Reserved | Crafted by .
            <Link to="/Ourchefs" className="link">
              Our Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
