import React from "react";

export default function Controls({ setCurrentIndex, total }) {
  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex === total - 1 ? 0 : prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? total - 1 : prevIndex - 1);
  };

  return (
    <div className="controls">
      <button type="button" onClick={handlePrev} aria-label="Előző kép">❮</button>
      <button type="button" onClick={handleNext} aria-label="Következő kép">❯</button>
    </div>
  );
}
