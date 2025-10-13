import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Sharjith</div>

      <div className="desktopMenu">
        <Link to="intro" smooth={true} offset={-80} duration={500} className="navItem">Home</Link>
        <Link to="works" smooth={true} offset={-60} duration={500} className="navItem">Projects</Link>
        <Link to="contact" smooth={true} offset={-60} duration={500} className="navItem">Contact</Link>
        <a href="/Sharjith_A_Resume.pdf" target="_blank" rel="noopener noreferrer" className="navItem">My CV</a>
      </div>

      <button
        className="navBtn"
        onClick={() =>
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }
      >
        Contact Me
      </button>

      <div className="mobileMenuToggle" onClick={() => setShowMenu(!showMenu)}>☰</div>

      {showMenu && (
        <div className="mobileMenu">
          <Link to="intro" smooth={true} offset={-80} duration={500} className="navItem" onClick={() => setShowMenu(false)}>Home</Link>
          <Link to="works" smooth={true} offset={-60} duration={500} className="navItem" onClick={() => setShowMenu(false)}>Projects</Link>
          <Link to="contact" smooth={true} offset={-60} duration={500} className="navItem" onClick={() => setShowMenu(false)}>Contact</Link>
          <a href="/Sharjith_A_Resume.pdf" target="_blank" rel="noopener noreferrer" className="navItem" onClick={() => setShowMenu(false)}>My CV</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
