import React from 'react';
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/Logo_smiles_me_navbar.png';


const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wsmcp">What's new in SMCP?</a></p>
          <p><a href="#possibility">Shop</a></p>
          <p><a href="#features">Products</a></p>
          <p><a href="#blog">About us</a></p>
        </div>
        <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar