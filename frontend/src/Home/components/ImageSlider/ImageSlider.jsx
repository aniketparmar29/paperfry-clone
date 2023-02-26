import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { SliderData } from './SliderData';

const Button = styled.button`
  margin: 10px 5px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? "#000000" : "#c4c4c4")};
`;

const ImageSlider = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const carouselRef = useRef();
  
    const next = () => {
      if (activeItemIndex + 1 <= SliderData.length - 1) {
        carouselRef.current.goTo(activeItemIndex + 1);
        setActiveItemIndex(activeItemIndex + 1);
      } else if (activeItemIndex + 1 === SliderData.length) {
        setActiveItemIndex(0);
        carouselRef.current.goTo(0);
      }
    };
    
    return (
      <div style={{width: "950px", height: "450px"}}>
        <Carousel
          ref={carouselRef}
          itemsToShow={1}
          showArrows={false}
          pagination={false}
          enableAutoPlay
          autoPlaySpeed={3000}
          onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
        >

          {SliderData.map((item, i) => (
            <div key={i}>
              <div>
                <img src={item.image} alt="splash" width="930px" height = '450px'/>
              </div>
            </div>
          ))}
        </Carousel>
  
        <div style={{ display: "flex", justifyContent: "center" }}>
          {SliderData.map(( _ , idx) => (
            <div>
              <Button
                key={idx}
                active={idx === activeItemIndex}
                onClick={() => carouselRef.current.goTo(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    );  
};

export default ImageSlider;