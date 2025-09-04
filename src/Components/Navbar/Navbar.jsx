import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img id='navbar-logo' src={logo} alt="Jaycoded Datalab Logo" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Work</li>
            <li>Projects</li>
            <li>Publications</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  ); 
};

export default Navbar;