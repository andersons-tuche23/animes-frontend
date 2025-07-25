import { BASE_URL } from "../lib";

export async function getTopPopular() {
  const response = await BASE_URL.get(
    "/anime?page%5Blimit%5D=6&sort=-popularityRank,popularityRank"
  );

  return response.data.data;
}
