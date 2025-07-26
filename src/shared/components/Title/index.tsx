"use client";

import * as S from "./styles";
import { TitleProps } from "./types";

export const Title = ({ defaultTitle = "Animes", icon, title }: TitleProps) => {
  return (
    <S.Wrapper>
      <S.Icon>{icon}</S.Icon>

      <S.Text>
        <strong>{defaultTitle}</strong> <span>{title}</span>
      </S.Text>
    </S.Wrapper>
  );
};
