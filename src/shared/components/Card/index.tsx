import Link from "next/link";
import Image from "next/image";

import { CustomTooltip } from "../CustomTooltip";
import { CardComponentProps } from "./types";
import { Film } from "lucide-react";

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

  const imgUrl = posterImage?.large;

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
        <Link href={`/details/${id}`} passHref>
          {imgUrl ? (
            <Image
              src={posterImage.large}
              alt={canonicalTitle}
              width={226}
              height={319}
            />
          ) : (
            <div
              style={{
                width: 226,
                height: 319,
                backgroundColor: "#e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Film size={48} />
            </div>
          )}
        </Link>
      </div>
    </CustomTooltip>
  );
};
