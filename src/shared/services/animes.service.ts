import { Anime, Item } from "../types";
import { BASE_URL } from "../lib";

export interface Link {
  first: string;
  next: string;
  last: string;
  prev: string;
}

interface GetAllAnimesOutput {
  data: Item[];
  links: Link;
}

export async function getAllAnimes(
  searchText?: string,
  offset = "0",
  limit = 20
): Promise<GetAllAnimesOutput> {
  const params = new URLSearchParams();

  if (searchText) {
    params.append("filter[text]", searchText);
  }

  params.append("sort", "popularityRank");
  params.append("page[limit]", limit.toString());
  params.append("page[offset]", offset);

  const response = await BASE_URL.get(`/anime?${params.toString()}`);
  return response.data;
}

export async function getAnimeById(id: string): Promise<Anime> {
  const response = await BASE_URL.get(`/anime/${id}`);

  return response.data.data;
}
