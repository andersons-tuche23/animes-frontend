import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  margin-top: 20px;

  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: auto;
  place-items: center;

  @media (min-width: 480px) {
    place-items: normal;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    place-items: normal;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    place-items: normal;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    place-items: normal;
    grid-template-columns: repeat(5, 1fr);
  }
`;
