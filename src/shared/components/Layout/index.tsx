import { ReactNode } from "react";

import { Sidebar } from "../Sidebar";

import * as S from "./styles";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <S.Wrapper>
      <Sidebar />

      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
}
