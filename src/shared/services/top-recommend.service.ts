import { BASE_URL } from "../lib";
import { Item } from "../types";

export async function getTopRecommended(): Promise<Item[]> {
  const response = await BASE_URL.get(
    "/anime?page%5Blimit%5D=5&sort=-average_rating"
  );

  return response.data.data;
}
