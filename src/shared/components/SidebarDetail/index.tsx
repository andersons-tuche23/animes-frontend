"use client";

import Image from "next/image";
import { Fragment, useState } from "react";

import * as S from "./styles";
import { SidebarDetailProps } from "./types";
import { Video } from "../Video";

export const SidebarDetail = ({ item }: SidebarDetailProps) => {
  const [isVisibleModalVideo, setIsVisibleModalVideo] = useState(false);

  const handleVisibilityModal = () =>
    setIsVisibleModalVideo((prevState) => !prevState);

  return (
    <Fragment>
      <S.Wrapper>
        {item.attributes.posterImage && (
          <Image
            src={item.attributes.posterImage.small}
            alt="Anime Poster Large"
            width={221}
            height={313}
            objectFit="cover"
          />
        )}

        <S.TubeButton type="button" onClick={handleVisibilityModal}>
          <Image src="/youtube.png" alt="" width={24} height={24} />
          VER TRAILER
        </S.TubeButton>

        <S.ApprovedText>
          Aprovado {item.attributes.averageRating}% da comunidade
        </S.ApprovedText>

        <S.Line>
          <Image src="/heart.png" alt="Coração" width={24} height={24} />
          <p>#{item.attributes.popularityRank} Mais Popular</p>
        </S.Line>

        <S.Line>
          <Image src="/star.png" alt="Coração" width={24} height={24} />
          <p>#{item.attributes.ratingRank} Melhor classificado</p>
        </S.Line>

        {/* <AproveText>Aprovado {averageRating}% da comunidade</AproveText>

      <StarImage>
        <img src="/star.png" alt="" />
        <p>#{ratingRank} Melhor classificado</p>
        </StarImage> */}
      </S.Wrapper>
      <Video
        onClose={handleVisibilityModal}
        visible={isVisibleModalVideo}
        videoId={item.attributes.youtubeVideoId}
      />
    </Fragment>
  );
};
