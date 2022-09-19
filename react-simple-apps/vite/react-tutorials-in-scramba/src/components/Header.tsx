import React from 'react';
import logo from '../assets/Rectangle 90.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="me" />
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <h3>laurasmith.website</h3>
    </header>
  );
}
export default Header;
