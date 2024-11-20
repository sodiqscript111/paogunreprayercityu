import React from "react";
import { Link } from 'react-router-dom';

import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          CHRIST APOSTOLIC CHURCH, PA OGUN RE PRAYER CITY, also known as HOLY GHOST MINISTRY, is a mission-driven fellowship that serves as a beacon of hope and spiritual revival. 
          Rooted in faith, our church is committed to fostering a deep connection with God while creating a strong, supportive community for believers. With our general headquarters in Ibadan, Nigeria, 
          we have continued to expand across the world, touching lives and spreading the message of love, faith, and grace.
        </p>
        <Link to="/about">
  <button className="read-more">
    Read More
  </button>
</Link>
      </div>
    </div>
  );
};

export default AboutUs;
