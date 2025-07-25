import { X } from "lucide-react";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #f46d1b;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  position: fixed;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  padding: 1rem;
`;

export const MenuIcon = styled.div`
  font-size: 3.2rem;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;

  &:hover {
    color: #444;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFaTimes = styled(X)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const MenuLinks = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  margin-right: 7rem;
  margin-top: 1rem;
  gap: 7px;

  p {
    font-size: 1.6rem;
    cursor: pointer;
    transition: transform ease-in 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const TextMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    font-size: 2.6rem;
  }
`;

export const SidebarContent = styled.div`
  transition: display 0.3s ease-in-out;
`;

export const SidebarItem = styled.div`
  width: 100%;
  padding: 15px 20px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;
