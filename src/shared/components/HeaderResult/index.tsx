"use client";

import { Logo } from "@/shared/components";
import { useSearch } from "@/shared/hooks";

import * as S from "./styles";

export const HeaderResult = () => {
  const { inputText, handleKeyDown, handleInputChange } = useSearch();

  return (
    <S.Wrapper>
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
