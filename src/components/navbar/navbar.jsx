import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import menu from '../../assets/bars-solid.svg'; // Import your menu icon
import close from '../../assets/xmark-solid.svg'; // Import your close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://www.pngkey.com/png/detail/123-1230334_the-christ-apostolic-church-christ-apostolic-church-logo.png"
          alt="Logo"
        />
      </div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <img
          src={isOpen ? close : menu}
          alt={isOpen ? 'Close Menu' : 'Open Menu'}
          style={{ width: '30px', height: '30px' }}
        />
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li style={{
  textDecoration: 'none', // corrected the property name (camelCase)
  color: 'black'}}>
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
