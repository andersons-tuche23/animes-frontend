"use client";

import { Logo } from "@/shared/components";

import * as S from "./styles";

export const Banner = () => {
  return (
    <S.Wrapper>
      <S.ContainerTop>
        <Logo />

        <S.InputDesktop />
      </S.ContainerTop>

      <S.InputMobile />
    </S.Wrapper>
  );
};
