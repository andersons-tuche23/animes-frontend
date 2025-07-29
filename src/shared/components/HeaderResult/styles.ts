import styled from "styled-components";
import { Input } from "../Input";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 102px;
  width: 100%;
  padding: 2rem;
  position: relative;

  @media (max-width: 640px) {
    height: 150px;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputDesktop = styled(Input)`
  display: flex;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const InputMobile = styled(Input)`
  display: none !important;

  @media (max-width: 768px) {
    display: flex !important;
    width: 80%;
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 641px) {
    bottom: 4rem;
  }
`;
