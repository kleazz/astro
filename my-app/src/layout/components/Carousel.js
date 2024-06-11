import React, { useState } from 'react';
import "../style/carousel.css"

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <div className="left-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].paragraph}</p>
        </div>
        <div className="right-content">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} style={{ width: '5cm', height: '5cm' }} />
        </div>
      </div>
      <div className="carousel-navigation">
        <button onClick={goToPreviousSlide}>&#8249;</button>
        <button onClick={goToNextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;
