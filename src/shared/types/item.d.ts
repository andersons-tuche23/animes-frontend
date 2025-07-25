interface PosterImage {
  large: string;
}

interface Attributes {
  posterImage: PosterImage;
  canonicalTitle: string;
  popularityRank: number;
  ratingRank: number;
  averageRating: number;
  synopsis: string;
}

export interface Item {
  id: string;
  attributes: Attributes;
}
