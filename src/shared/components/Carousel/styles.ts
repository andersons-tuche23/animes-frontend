import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 2rem auto;
  overflow: hidden;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;
