// src/layout/header/header.js
import React from 'react';
import { Link } from 'react-router-dom';
import headerlogo from '../../assets/images/logo.png';

function Header({ logo }) {
  return (
    <header className="App-header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="header-left">
              <ul className="nav-menu">
                <li><Link to="/">Features</Link></li>
                <li><Link to="/new-page">About Us</Link></li>
                <li><Link to="/">Testimonials</Link></li>
                <li><Link to="/">Resources</Link></li>
              </ul>
            </div>
            <div className="logo">
              <img src={headerlogo} alt="" />
            </div>
            <div className="header-right">
              <ul className="nav-menu">
                <li><Link to="/">Company</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/" className="btn btn-outline-primary">login</Link></li> {/* Add the new page link */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
