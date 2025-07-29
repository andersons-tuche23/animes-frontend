import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 2rem auto;
  overflow: hidden;

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover cover;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  z-index: 10;
`;

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover {
    background-color: #fff;
  }
`;
