import React from 'react';
import './_Header.scss';

const Header = () => (
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;