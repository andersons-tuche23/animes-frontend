import { X } from "lucide-react";
import styled from "styled-components";

export const SidebarContainer = styled.div<{ open: boolean }>`
  background-color: ${({ theme }) => theme.ORANGE};
  color: ${({ theme }) => theme.WHITE};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  left: 0;
  top: 0;
  position: fixed;
  bottom: 0;
  height: 100%;
  padding: 2rem;

  width: ${({ open }) => (open ? "267px" : "70px")};
  align-items: ${({ open }) => (open ? "flex-start" : "center")};

  @media (max-width: 640px) {
    position: absolute;
    background-color: ${({ theme, open }) =>
      open ? theme.ORANGE : "transparent"};
  }
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
  margin: 2rem 0;
  gap: 7px;
  height: 55%;
  overflow-y: scroll;
  width: 100%;

  a {
    width: 100%;
    font-size: 1.6rem;
    ${({ theme }) => theme.WHITE}
    padding: 8px 0;
  }

  @media (max-width: 640px) {
    height: 50%;
  }
`;

export const TextMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    font-size: 2rem;
  }
`;

export const SidebarContent = styled.div`
  transition: display 0.3s ease-in-out;
  width: 100%;
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
