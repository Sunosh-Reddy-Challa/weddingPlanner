import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  // Check if slides array is not empty and currentIndex is within bounds
  if (!slides || slides.length === 0 || currentIndex < 0 || currentIndex >= slides.length) {
    return null; // or handle the case when there are no slides
  }

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}></div>
    </div>
  );
}

export default ImageSlider;
