"use client";

import * as S from "./styles";
import { Item } from "@/shared/types";

import { CardComponent } from "../Card";

export const ListAnimes = ({ data }: { data: Item[] }) => (
  <S.Wrapper>
    {data.map((item) => (
      <CardComponent key={item.id} item={item} />
    ))}
  </S.Wrapper>
);
