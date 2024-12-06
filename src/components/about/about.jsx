import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css";

const AboutUs = () => {
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  // Function to split text into words and wrap each word in a span
  const splitWords = (element) => {
    const text = element.textContent; // Get text content
    const words = text.split(" ");
    element.textContent = ""; // Clear original text

    // Create a span for each word and append it
    words.forEach((word) => {
      const span = document.createElement("span");
      span.classList.add("word");
      span.textContent = word;
      element.appendChild(span);
      element.appendChild(document.createTextNode(" ")); // Add space
    });
  };

  useEffect(() => {
    // Split the words in h2 and p
    if (h2Ref.current) splitWords(h2Ref.current);
    if (pRef.current) splitWords(pRef.current);

    // Intersection Observer for animation
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const words = entry.target.querySelectorAll(".word");
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add("reveal"); // Add reveal animation
            }, index * 50); // Delay animation
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    // Observe h2 and p
    if (h2Ref.current) observer.observe(h2Ref.current);
    if (pRef.current) observer.observe(pRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2 ref={h2Ref}>About Us</h2>
        <p ref={pRef}>
          CHRIST APOSTOLIC CHURCH, PA OGUN RE PRAYER CITY, also known as HOLY
          GHOST MINISTRY, is a mission-driven fellowship that serves as a beacon
          of hope and spiritual revival. Rooted in faith, our church is
          committed to fostering a deep connection with God while creating a
          strong, supportive community for believers. With our general
          headquarters in Ibadan, Nigeria, we have continued to expand across
          the world, touching lives and spreading the message of love, faith,
          and grace.
        </p>
        <Link to="/about">
          <button className="read-more">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
