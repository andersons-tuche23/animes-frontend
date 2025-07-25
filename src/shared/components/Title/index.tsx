"use client";

import * as S from "./styles";
import { TitleProps } from "./types";

export const Title = ({ icon, title }: TitleProps) => {
  return (
    <S.Wrapper>
      <S.Icon>{icon}</S.Icon>

      <S.Text>
        <strong>Animes</strong> <span>{title}</span>
      </S.Text>
    </S.Wrapper>
  );
};
