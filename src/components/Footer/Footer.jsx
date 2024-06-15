import React from 'react';
import './Footer.css';
import { IoMdMail } from "react-icons/io";
import Separator from "./sub-components/separator.svg"

const Footer = () => {
  return (
    <footer className="footer section text-center">
      <div className="container">
        <div className="footer-top grid-list">

          {/* Center Box */}
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              Resto Logo
            </a>
            <div className='text'>
              <address className="body-4">
                IIIT Guwahati, Kamrup, Guwahati, India
              </address>
              <a href="mailto:webdevteam@iiitg.com" className="body-4 contact-link">
                webdevteam@iiitg.com
              </a>
              <a href="tel:+88123123456" className="body-4 contact-link">
                Booking Request : +91-123-123456
              </a>
              <p className="body-4">Open : 09:00 am - 01:00 pm</p>
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
                  autoComplete="off"
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className='btn-text'>SUBSCRIBE</span>              </button>
            </form>
          </div>

          {/* Left List */}
          <ul className="footer-list list-1">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Menus
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Our Chefs
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Contact
              </a>
            </li>
          </ul>


          {/* Right List */}
          <ul className="footer-list list-2">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Google Map
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Web Dev Team. All Rights Reserved | Crafted by{' '}
            <a href="#" target="_blank" className="link">
              TO BE FILLED
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
