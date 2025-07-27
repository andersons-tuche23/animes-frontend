import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #222;
  width: 100%;
  margin-top: 10rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    transform: translateY(-29px);
  }

  @media (max-width: 640px) {
    padding-left: 8rem;
  }
`;

export const TextContainer = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 1.6rem;

  p {
    color: #fff;
  }

  span {
    color: #34ac40;
  }

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;

export const ButtonFooter = styled(Link)`
  margin-top: 10px;
  font-size: 2rem;
  background-color: #262626;
  color: #f46d1b;
  border: 3px solid #f46d1b;
  cursor: pointer;
  padding: 6px 20px;
`;

export const TextFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  font-size: 1.6rem;

  p {
    margin-left: 8rem;
    color: #fff;
  }

  img {
    filter: brightness(0) saturate(100%) invert(100%);
    height: 70px;
    width: 70px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    text-align: center;
    width: 100%;
    font-size: 1.4rem;
    padding-left: 8rem;

    p {
      width: 70%;
      margin-left: 0;
    }
  }
`;
