import { Category } from "@/shared/types";
import { BASE_URL } from "../lib/axios";

export async function getAllCategories(): Promise<Category[]> {
  const response = await BASE_URL.get(
    "/categories?page%5Blimit%5D=40&sort=-total_media_count"
  );

  return response.data.data;
}
