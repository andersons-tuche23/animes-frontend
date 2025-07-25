import { ReactNode } from "react";

export interface CustomTooltipProps {
  text: string;
  children: ReactNode;
  rank: number;
  ratingRank?: number;
  popularityRank?: number;
  averageRating: number;
  synopsis: string;
}
