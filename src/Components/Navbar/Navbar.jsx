import React, { useState } from "react";
import "./Navbar.css";

import logo4 from "../Assets/logo4.png";
import linkedin from "../Assets/linkedin-logo.png";
import insta from "../Assets/instagram-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo4} width={"250px"} alt=""/>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("home")}}><Link style={{textDecoration: 'none', color: ' #F2F2F2'}} to='/'>Home</Link> {menu=== "home" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("about")}}><Link style={{textDecoration: 'none', color: ' #F2F2F2'}} to='/aboutus'>About us</Link>{menu=== "about" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("products")}}><Link style={{textDecoration: 'none', color: ' #F2F2F2'}} to='/products'>Products</Link>{menu=== "products" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("contact")}}><Link style={{textDecoration: 'none', color: ' #F2F2F2'}} to='/contactus'>Contact us</Link>{menu=== "contact" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("prebook")}}><Link style={{textDecoration: 'none', color: ' #F2F2F2'}} to='/prebook'>Pre-book now</Link> {menu=== "prebook" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-social">
        <a href="https://linkedin.com"><img src={linkedin} alt=""/></a>
        <a href="https://instagram.com"><img src={insta} alt=""/></a>
      </div>
    </div>
  );
};

export default Navbar;
