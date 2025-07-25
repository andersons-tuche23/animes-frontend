"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";

const images = ["./banner4.png", "./banner3.png", "./banner2.png"];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <S.CarouselContainer>
      <S.CarouselWrapper>
        {images.map((image, index) => (
          <S.CarouselSlide
            key={index}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              display: index === currentIndex ? "block" : "none",
            }}
          >
            <S.CarouselImage src={image} alt={`Slide ${index + 1}`} />
          </S.CarouselSlide>
        ))}
      </S.CarouselWrapper>
      <S.DotContainer>
        {images.map((_, index) => (
          <S.Dot
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              backgroundColor:
                index === currentIndex ? "#F46D1B" : "rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </S.DotContainer>
    </S.CarouselContainer>
  );
}
