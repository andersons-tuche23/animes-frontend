"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import * as S from "./styles";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export const Banner = () => {
  const [inputText, setInputText] = useState("");

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/categories?view=${encodeURIComponent(inputText)}`);
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerTop>
        <Image src="/animesHome.png" alt="Logo" width={200} height={49} />

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
