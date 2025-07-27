export interface Anime {
  attributes: {
    coverImage: {
      tiny: string;
      large: string;
    };
    posterImage: {
      tiny: string;
      small: string;
    };
    youtubeVideoId: string;
    description: string;
    synopsis: string;
    canonicalTitle: string;
    averageRating: number;
    ratingRank: number;
    popularityRank: number;
  };
}
