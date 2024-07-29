import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Changed CSS file to HeaderCustom.css
import homePath from './assets/images/logo.png'; // Replace with your image path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.header-navbar');
      if (window.scrollY > 17) {
        navbar.classList.add('header-navbar-scrolled');
      } else {
        navbar.classList.remove('header-navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-custom">
      <div className="header-top"></div>
      <section className={`header-navbar ${isMenuOpen ? 'header-navbar-open' : ''}`}>
        <div className="header-logo">
          <a href="/" rel="noopener noreferrer">
            <img src={homePath} alt="Logo" />
          </a>
        </div>
        <button className="menu-toggle-button" onClick={toggleMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'nav-links-active' : ''}`}>
            <li>
              <NavLink exact to="/" activeClassName="nav-link-active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-link-active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/space" activeClassName="nav-link-active">
                Space
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="nav-link-active">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="nav-link-active">
                Contact Us
              </NavLink>
            </li>
            <li>
              <a href="/" className="sos-link">SOS</a>
            </li>
            <li>
              <NavLink to="/login" activeClassName="nav-link-active">
                Login/Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
