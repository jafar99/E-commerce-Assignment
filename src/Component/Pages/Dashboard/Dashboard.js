import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const slide1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo__moHaz6H74aQciYHdWvNeFHr9tSgYAWNQ&usqp=CAU";
const login_bg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId7SmMUiLJctLeFhq7sZmwLxleL62n5Rk0g&usqp=CAU";
const logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZlzf7mRIazLbCkfsX9h5sb7PIIoiXzJ1nQ&usqp=CAU";

const images = [slide1, login_bg, logo];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="slider">
      <button onClick={prevSlide}>&lt;</button>
      <div className="slider-image">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="slider-img"
        />
        <div className="dots-container">
          {images.map((image, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Dashboard;
