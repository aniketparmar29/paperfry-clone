import React, { useState } from "react";
import tw from 'tailwind-styled-components';
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];
  const [glassPosition, setGlassPosition] = useState({ x: 0, y: 0 });

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const ImageWrapper = tw.div`
  relative
`;

const MagnifyingGlass = tw.div`
  absolute
  z-50
  rounded-full
  border
  border-gray-500
  w-16
  h-16
  pointer-events-none
  transform
  -translate-x-1/2
  -translate-y-1/2
`;

const Image = tw.img`
  block
  w-full
  h-auto
  transition-all
  duration-200
  cursor-zoom-in
  hover:scale-150
`;
  return (
      <div className="relative">
        <div className={'w-[100%] h-[30%] border-gray-300 relative'}>
          {currentImage && 
          
            <img
              src={currentImage}
              alt="Current Image"
              className="w-full h-full object-contain"
              
            />
          }
          <div className=" flex  items-center">
            <button
              className="p-1 font-bold border-2 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 absolute top-1/2 transform -translate-y-1/2 left-0"
              onClick={handlePreviousClick}
            >
              {"<"}
            </button>
            <button
              className="p-1 font-bold border-2 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 absolute top-1/2 transform -translate-y-1/2 right-0"
              onClick={handleNextClick}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="flex jmt-4">
          {images.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-24 h-24 object-contain border hover:border-orange-600  mx-1 cursor-pointer ${
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
