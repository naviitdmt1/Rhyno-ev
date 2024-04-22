import React from "react";
import "./ContactUs.css";
import contactimg from '../Components/Assets/contact.jpeg'

const ContactUs = () => {
  return (
    <>
    <center className="cnt">
      <img src={contactimg} alt="" />
      <h1>Contact Us</h1>
    </center>
      <div className="contact">
        <div className="location citem">
          <h2>Location:</h2>
          <p>
            Rhyno Wheels Private limited, <br /> Near UG hostel gate #2, Behind PDEU,<br />
            Raisan, Gandhinagar, Gujarat, India.
          </p>
        </div>
        <div className="mail citem">
          <h2>Mail:</h2>
          <p>info@rhyno.in</p>
        </div>
        <div className="phone citem">
          <h2>Mobile no:</h2>
          <p>+91-9023987528</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
