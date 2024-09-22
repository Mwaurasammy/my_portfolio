import React from "react";
import { ReactTyped as Typed } from 'react-typed';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>Sammy Mwaura</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="https://github.com/Mwaurasammy" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://linkedin.com/in/sammy-mwaura-3620b625a" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="mailto:sammy@example.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-email"></i></a></li>
        </ul>
      </nav>
      <div className="hero-section">
        <Typed
          strings={["Hi, Sammy here."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <p>Turning ideas into reality with code.</p>
        <a href="#projects" className="btn">View Projects</a>
      </div>
    </header>
  );
};

export default Header;
