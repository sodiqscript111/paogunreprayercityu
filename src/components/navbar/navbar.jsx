
// Suggested code may be subject to a license. Learn more: ~LicenseLog:109049380.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2997473313.
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="https://www.cacfsif.com/images/LongLogo1.png" alt="Logo" /> {/* Paste your image link here */}
      </div>
      <div class="container">
        <input class="label-check" id="label-check" type="checkbox" />
        <label for="label-check" class="hamburger-label">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </label>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




