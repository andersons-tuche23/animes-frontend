"use client";

import { List, Menu } from "lucide-react";
import React, { useRef, useState } from "react";

import { useClickOutside, useGetCategories } from "@/shared/hooks";

import * as S from "./styles";
import Link from "next/link";
import { useTheme } from "styled-components";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { ORANGE } = useTheme();
  const { data: categories = [] } = useGetCategories();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  useClickOutside(sidebarRef, setIsOpen);

  return (
    <S.SidebarContainer
      ref={sidebarRef}
      style={{
        width: isOpen ? "267px" : "70px",
        alignItems: isOpen ? "flex-start" : "center",
        position: isMobile ? (isOpen ? "fixed" : "absolute") : "fixed",
        backgroundColor: isMobile ? (isOpen ? ORANGE : "transparent") : ORANGE,
      }}
    >
      {!isOpen ? (
        <S.MenuIcon onClick={toggleSidebar}>
          <Menu />
        </S.MenuIcon>
      ) : (
        <S.MenuContainer>
          <S.TextMenu>
            <List size={30} />

            <span>Categorias</span>
          </S.TextMenu>
          <S.StyledFaTimes onClick={toggleSidebar} />
        </S.MenuContainer>
      )}

      <S.SidebarContent
        style={{
          display: isOpen ? "flex" : "none",
        }}
      >
        <S.MenuLinks>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/result?view=${encodeURIComponent(
                category.attributes.title
              )}`}
              onClick={toggleSidebar}
            >
              {category.attributes.title}
            </Link>
          ))}
        </S.MenuLinks>
      </S.SidebarContent>
    </S.SidebarContainer>
  );
}
