import React from "react";
import "./aboutpage.css";
import Navbar from '../navbar/navbar';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page">
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          CHRIST APOSTOLIC CHURCH, PA OGUN RE PRAYER CITY, also known as HOLY GHOST MINISTRY, is a mission-driven fellowship that serves as a beacon of hope and spiritual revival. Rooted in faith, our church is committed to fostering a deep connection with God while creating a strong, supportive community for believers. With our general headquarters in Ibadan, Nigeria, we have continued to expand across the world, touching lives and spreading the message of love, faith, and grace.
        </p>
      </div>

      <div className="about-section">
        <h3>Our Mission</h3>
        <div className="grid">
          <div className="grid-item">
            <h4>Mission Statement</h4>
            <p>
              “Occupy till I come” (St. Luke 19:13). Our mission is to focus on the continuity of evangelism, preach the living word of God to all nations, pray and receive through faith, serve our community, teach the truth of God’s word, heal and comfort the hurting, set the captives free, and fellowship as a body of Christ.
            </p>
          </div>
          
          <div className="grid-item image">
            <img src="https://i.ibb.co/qpyx2y9/founder2.jpg" alt="Mission Image" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <h3>CAC NIGERIA AND OVERSEAS</h3>
        <p>
        CAC NIGERIA AND OVERSEAS is a great mission that God has planted and continues to expand all over the world. The general headquarters is at Ibadan, the largest city in Nigeria. 
        </p>
        <p>
          The mission is blessed with branches in Africa, Europe, and America. The head of CAC NIGERIA AND OVERSEAS is the President. For full details of CAC NIGERIA AND OVERSEAS, you may visit: <a href="http://www.cacworldwide.net" target="_blank" rel="noopener noreferrer">www.cacworldwide.net</a>
        </p>
      </div>

      <div className="about-section">
        <h3>Our Core Values</h3>
        <div className="grid">
          <div className="grid-item">
            <ul>
              <li>To focus on continuity of evangelism - “Occupy till I come” (St. Luke 19:13)</li>
              <li>To preach the living word of God to all nations (St. Matthew 28:19)</li>
              <li>To pray and receive through faith and total reliance on God Jehovah (St. Matthew 17:20 -21)</li>
              <li>To serve our community (1st Peter 4:8-9)</li>
              <li>To teach the truth of God’s word (St. John 8:32)</li>
              <li>To heal and comfort the hurting (Isaiah 40:1)</li>
              <li>To set the captives free (St. John 8:36)</li>
              <li>To fellowship as a body of Christ (1st Corinthians 1:9; Phil. 2:1-2)</li>
            </ul>
          </div>

          <div className="grid-item image">
            <img src="https://i.ibb.co/c2wMbzG/choice.jpg" alt="Core Values Image" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
