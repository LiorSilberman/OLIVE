import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img className='footer-logo' src={assets.logo} alt="" />
                <p>להוסיף כאן מלל</p> */}
                <div className="footer-social-icons">
                    <h2>SOCIAL</h2>
                    <a href="https://www.instagram.com/o_live_studio?igsh=djc5eWg4aTQ0ZTd4" target="_blank" rel="noopener noreferrer">
                        <img src={assets.instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>O-LIVE</h2>
                <ul>
                    <li>
                        <a href="/">ראשי</a>
                    </li>
                    <li>
                        <a href="#about-us">העשייה שלנו</a>
                    </li>
                    <li>
                        <a href="#BMI">BMI</a>
                    </li>
                    <li>
                        <a href="#contact-us">צור קשר</a>
                    </li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>לפרטים נוספים</h2>
                <ul>
                    <li>0537333334</li>
                    <li>Ne.power.pilates@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">© כל הזכויות שמורות ל O-LIVE</p>
        <p className="footer-copyright">Made by Lior Silberman</p> 
            
        
    </div>
  )
}

export default Footer