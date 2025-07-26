import { Input } from "@/shared/styles";
import styled from "styled-components";

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
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputMobile = styled(Input)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 80%;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
