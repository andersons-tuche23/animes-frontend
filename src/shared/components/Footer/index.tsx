"use client";

import React from "react";
import Image from "next/image";

import * as S from "./styles";

export const Footer = () => (
  <S.Wrapper>
    <S.FooterContent>
      <Image src="/yuzu.png" alt="" width={249} height={94} />
      <S.TextContainer>
        <p>Ainda está procurando algo pra assistir?</p>
        <span>Confira o nosso acervo completo</span>
      </S.TextContainer>
      <S.ButtonFooter href="/result">Ver tudo</S.ButtonFooter>
    </S.FooterContent>

    <S.TextFooter>
      <p>© 2025 Teste Animes - Todos os direitos reservados</p>
      <Image src="/sasuke.png" alt="" width={70} height={70} />
    </S.TextFooter>
  </S.Wrapper>
);
