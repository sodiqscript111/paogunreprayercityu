
import React, { useState, useEffect } from "react";
import "./welcome.css"; // Include the CSS file for styling

const Welcome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    
    "https://i.ibb.co/PFG1Qg8/founder5.jpg",
    "https://i.ibb.co/bBmG5sm/Whats-App-Image-2024-11-25-at-19-27-25-1cf51ea9.jpg",
    "https://i.ibb.co/r6W6j9D/Whats-App-Image-2024-11-25-at-19-27-25-7292244e.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1500
); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-container">
      <div className="carousel">
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      </div>
      <div className="welcome-text">
        CHRIST APOSTOLIC CHURCH, PA OGUN RE PRAYER CITY, AKA HOLY SPIRIT MINISTRY
      </div>
    </div>
  );
};

export default Welcome;
