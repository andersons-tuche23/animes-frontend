import Link from "next/link";
import Image from "next/image";

import { CustomTooltip } from "../CustomTooltip";
import { CardComponentProps } from "./types";

export const CardComponent = ({ item }: CardComponentProps) => {
  const {
    id,
    attributes: {
      canonicalTitle,
      posterImage,
      popularityRank,
      ratingRank,
      averageRating,
      synopsis,
    },
  } = item;

  return (
    <CustomTooltip
      text={canonicalTitle}
      rank={popularityRank}
      ratingRank={ratingRank}
      popularityRank={popularityRank}
      averageRating={averageRating}
      synopsis={synopsis}
    >
      <div>
        <Link href={`/sinopes?animeId=${id}`} passHref>
          <Image
            src={posterImage.large}
            alt={canonicalTitle}
            width={226}
            height={319}
          />
        </Link>
      </div>
    </CustomTooltip>
  );
};
