"use client";

import { useState } from "react";

import * as S from "./styles";
import { CustomTooltipProps } from "./types";

export function CustomTooltip({
  text,
  children,
  ratingRank,
  popularityRank,
  averageRating,
  synopsis,
}: CustomTooltipProps) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <S.TooltipWrapper onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && (
        <S.Tooltip>
          <S.Tittle>{` ${text}`}</S.Tittle>
          {averageRating !== undefined && (
            <S.Classification>{`${averageRating}%`}</S.Classification>
          )}
          {popularityRank !== undefined && (
            <S.HeartText>
              <S.Icon role="img" aria-label="heart">
                ❤️
              </S.Icon>
              {`#${popularityRank} Mais Popular`}
            </S.HeartText>
          )}
          {ratingRank !== undefined && (
            <S.StarText>
              <S.Icon role="img" aria-label="star">
                ⭐
              </S.Icon>
              {`#${ratingRank} Melhor Classificado`}
            </S.StarText>
          )}
          {synopsis && <S.Sinops>{synopsis}</S.Sinops>}
        </S.Tooltip>
      )}
    </S.TooltipWrapper>
  );
}
