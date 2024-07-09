import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-full mb-20">
      <div className="carousel w-auto">
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img
              src={image}
              className="w-full h-100 object-cover rounded-t-lg"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle"
                onClick={goToPreviousSlide}
              >
                ❮
              </a>
              <a
                href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle"
                onClick={goToNextSlide}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
