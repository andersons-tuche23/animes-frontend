import styled from "styled-components";
import { Input } from "../Input";

export const Wrapper = styled.div`
  width: 100%;
  height: 29rem;
  background-image: url(${"./banner.png"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 2rem;
  position: relative;
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputDesktop = styled(Input)`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputMobile = styled(Input)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 80%;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
