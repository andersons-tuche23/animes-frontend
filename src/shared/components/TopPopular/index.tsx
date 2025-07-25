"use client";

import Link from "next/link";
import Image from "next/image";

import * as S from "./styles";
import { Item } from "@/shared/types";
import { CustomTooltip } from "../CustomTooltip";

export const TopPopular = ({ data }: { data: Item[] }) => (
  <S.Wrapper>
    {data.map((item) => (
      <CustomTooltip
        key={item.id}
        text={item.attributes.canonicalTitle}
        rank={item.attributes.popularityRank}
        ratingRank={item.attributes.ratingRank}
        popularityRank={item.attributes.popularityRank}
        averageRating={item.attributes.averageRating}
        synopsis={item.attributes.synopsis}
      >
        <div>
          <Link href={`/sinopes?animeId=${item.id}`} passHref>
            <Image
              src={item.attributes.posterImage.large}
              alt={item.attributes.canonicalTitle}
              width={226}
              height={319}
            />
          </Link>
        </div>
      </CustomTooltip>
    ))}
  </S.Wrapper>
);
