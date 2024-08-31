import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src='' alt='' className='logo' /></Link>
      <button className={`burger-button ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>ראשי</Link>
        <a href='#about-us' onClick={() => handleMenuClick("about-us")} className={menu === "about-us" ? "active" : ""}>העשייה שלנו</a>
        <a href='#BMI' onClick={() => handleMenuClick("BMI")} className={menu === "BMI" ? "active" : ""}>BMI מחשבון</a>
        <a href='#contact-us' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>צור קשר</a>
      </nav>
    </div>
  )
}

export default Navbar