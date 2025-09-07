import React from 'react';
import { Link } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img id='navbar-logo' src={logo} alt="Jaycoded Datalab Logo" />
      <ul className='nav-menu'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect"><a href="#contact">Connect With Me</a></div>
    </div>
  ); 
};

export default Navbar;