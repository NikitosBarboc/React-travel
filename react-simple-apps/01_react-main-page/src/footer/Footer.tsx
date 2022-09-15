import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <h3 className="footer__title">Alivio</h3>
        <ul className="footer__list">
          <li className="footer__item">Why Alivio</li>
          <li className="footer__item">Solutions</li>
          <li className="footer__item">Community</li>
          <li className="footer__item">Pricing</li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
