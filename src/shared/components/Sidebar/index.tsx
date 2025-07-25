"use client";

import { List, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

import { useClickOutside, useGetCategories } from "@/shared/hooks";

import * as S from "./styles";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const { data: categories = [] } = useGetCategories();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleCategoryClick = (categoryTitle: string) => {
    router.push(`/categories?view=${encodeURIComponent(categoryTitle)}`);
  };

  useClickOutside(sidebarRef, setIsOpen);

  return (
    <S.SidebarContainer
      ref={sidebarRef}
      style={{
        width: isOpen ? "267px" : "70px",
        alignItems: isOpen ? "flex-start" : "center",
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
            <p
              key={category.id}
              onClick={() => handleCategoryClick(category.attributes.title)}
            >
              {category.attributes.title}
            </p>
          ))}
        </S.MenuLinks>
      </S.SidebarContent>
    </S.SidebarContainer>
  );
}
