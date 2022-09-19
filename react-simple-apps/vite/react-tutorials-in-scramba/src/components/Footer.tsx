import React from 'react';
import twitterIcon from '../assets/Twitter Icon.png'
import facebookIcon from '../assets/Facebook Icon.png'
import instagramIcon from '../assets/Instagram Icon.png'
import linkedInIcon from '../assets/Linkedin Icon.png'
import gitHubIcon from '../assets/GitHub Icon.png'

function Footer() {
  return (
    <footer>
      <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
      <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
      <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
      <a href="#"><img src={linkedInIcon} alt="LinkedIn" /></a>
      <a href="#"><img src={gitHubIcon} alt="GitHub" /></a>
    </footer>
  )
}

export default Footer;
