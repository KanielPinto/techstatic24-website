import React, { useState } from 'react';
import '@/styles/slider.css';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="slider">
      <button className="prevButton" onClick={goToPrevious}>
        {'<'}
      </button>
      <div className="slide">
        {items[currentIndex]}
      </div>
      <button className="nextButton" onClick={goToNext}>
        {'>'}
      </button>
    </div>
  );
};

export default Slider;
