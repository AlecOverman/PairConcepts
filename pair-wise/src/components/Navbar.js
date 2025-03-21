import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './../Pics/PairConceptLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className='pic' />
        {/* <span>PairConcepts</span> */}
      </div>
      <div className="navbar-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;