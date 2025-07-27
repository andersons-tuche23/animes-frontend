"use client";

import { MouseEvent } from "react";

import * as S from "./styles";
import { VideoProps } from "./types";

export const Video = ({ videoId, onClose, visible }: VideoProps) => {
  if (!visible) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.IframeWrapper>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </S.IframeWrapper>
    </S.Overlay>
  );
};
