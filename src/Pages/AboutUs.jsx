import React from "react";
import about from "../Components/Assets/about.jpeg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <h1 className="heading">About Us</h1>
      <p className="firstp">
        Established in 2019 by an automotive engineer with a vision for
        sustainable and robust mobility solutions, Rhyno EV is not just a
        company; it's a collective effort of a dynamic team of young individuals
        passionately driving innovation in the electric vehicle industry. We
        believe in engineering solutions that solve problems.{" "}
      </p>

      <p className="secondp">
        With our first product, we've taken a bold step to create something more
        than just a vehicle; it's a unique experience of elegance, comfort and
        style, addressing the pitfalls of conventional electric scooters. Our
        design prioritizes safety, eliminating concerns of fires and ensuring a
        longer battery lifespan with our battery technology. Perfectly suited
        for fleet operators, especially in tourist-centric locations like Goa,
        our rugged yet aesthetically appealing scooters are engineered for
        longevity and reliability. Join us as we pioneer a new era in
        sustainable and dependable electric transportation.
      </p>
      <div className="main-img">
        <img src={about} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
