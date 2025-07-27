"use client";

import { Logo } from "@/shared/components";
import { useSearch } from "@/shared/hooks";

import * as S from "./styles";
import { HeaderResultProps } from "./types";
import { useTheme } from "styled-components";

export const HeaderResult = ({ isBackgroundBlack }: HeaderResultProps) => {
  const { BLACK } = useTheme();
  const { inputText, handleKeyDown, handleInputChange } = useSearch();

  return (
    <S.Wrapper
      style={{
        background: isBackgroundBlack ? BLACK : "rgba(0, 0, 0, 0.8)",
      }}
    >
      <S.ContainerTop>
        <Logo />

        <S.InputDesktop
          value={inputText}
          placeholder="Pesquisar"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </S.ContainerTop>

      <S.InputMobile
        value={inputText}
        placeholder="Pesquisar"
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
    </S.Wrapper>
  );
};
