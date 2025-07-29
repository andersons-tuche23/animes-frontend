"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Link from "next/link";

const carousel = [
  { img: "./banner4.png", anime: "naruto" },
  { img: "./banner3.png", anime: "one piece" },
  { img: "./banner2.png", anime: "dragon ball" },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
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
        {carousel.map((item, index) => (
          <Link
            href={`/result?view=${encodeURIComponent(item.anime)}`}
            key={index}
            passHref
          >
            <S.CarouselSlide
              key={index}
              style={{
                opacity: index === currentIndex ? 1 : 0,
                display: index === currentIndex ? "block" : "none",
              }}
            >
              <S.CarouselImage src={item.img} alt={`Slide ${index + 1}`} />
            </S.CarouselSlide>
          </Link>
        ))}
      </S.CarouselWrapper>
      <S.DotContainer>
        {carousel.map((_, index) => (
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
