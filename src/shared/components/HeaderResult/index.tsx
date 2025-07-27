"use client";

import { Logo } from "@/shared/components";
import { useTheme } from "styled-components";

import * as S from "./styles";
import { HeaderResultProps } from "./types";

export const HeaderResult = ({ isBackgroundBlack }: HeaderResultProps) => {
  const { BLACK } = useTheme();

  return (
    <S.Wrapper
      style={{
        background: isBackgroundBlack ? BLACK : "rgba(0, 0, 0, 0.8)",
      }}
    >
      <S.ContainerTop>
        <Logo />

        <S.InputDesktop />
      </S.ContainerTop>

      <S.InputMobile />
    </S.Wrapper>
  );
};
