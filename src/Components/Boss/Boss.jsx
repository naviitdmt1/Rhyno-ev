import React, { useState, useEffect } from "react";
import "./Boss.css";
import logo5 from "../Assets/logo5.png";
import { FaArrowRight } from "react-icons/fa6";
import redveh2 from "../Assets/redveh2.png";

const Boss = () => {
  const words = ["Style","Elegance", "Minimalism", "Comfort"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentWord, words]);

  return (
    <div className="boss">
      <div className="boss-left">
        <h2>RHYNO EV</h2>
        <div>
          <p>Let's Elevate Your Ride Experience With</p>
          <div className="boss-icon">
            <img src={logo5} alt=""/>
          </div>
          <p>Where Superiority Meets <span className="current-word">{currentWord}</span>.</p>
          
        </div>
        <div className="boss-checkout-btn">
          <div>Check Out</div>
          <FaArrowRight />
        </div>
      </div>
      <div className="boss-right">
        <img src={redveh2} width={"900px"} alt=""/>
      </div>
    </div>
  );
};

export default Boss;
