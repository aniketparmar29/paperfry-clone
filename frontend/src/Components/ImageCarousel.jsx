import React, { useState } from "react";
import tw from 'tailwind-styled-components';
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  
  return (
      <div className="sticky top-0">
        <div className={'relative w-46 h-56 overflow-hidden rounded-lg md:h-96 md:w-86'}>
          {currentImage && 
          
            <img
              src={currentImage}
              alt="Current img"
              className="w-full h-full object-contain"
              
            />
          }
          <div className=" flex  items-center">
            <div
              className="p-1 font-bold border-2 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 absolute top-1/2 transform -translate-y-1/2 left-0"
              onClick={handlePreviousClick}
            >
              {"<"}
            </div>
            <div
              className="p-1 font-bold border-2 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 absolute top-1/2 transform -translate-y-1/2 right-0"
              onClick={handleNextClick}
            >
              {">"}
            </div>
          </div>
        </div>
        <div className="flex jmt-4">
          {images.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-24 h-24 mt-4 ml-10 object-contain border-2 hover:border-orange-600  mx-1 cursor-pointer ${
              index === currentIndex ? "border-blue-500" : ""
            }`}
            onMouseOver={() => handleThumbnailClick(index)}
            onError={(e) => {
              e.target.style.display = "none";
            }}
            style={{ boxShadow: index === currentIndex ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.2)" }}
            // add box shadow on hover
            hover={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}
          />
          
          
          ))}
        </div>
      </div>
  );
};

export default ImageCarousel;
