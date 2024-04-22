import React from 'react'
import linkedinl from '../Assets/linkedin-logo.png'
import insta from "../Assets/instagram-logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='foot-menu'>
            <li>Privacy policy</li>
            <li>Refund policy</li>
            <li>Website policy</li>
            <li>Contact us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Rentals</li>
        </ul>
        <div className="f-socials">
            <img src={linkedinl} alt="" />
            <img src={insta} alt=""/>
        </div>

    </div>
  )
}

export default Footer