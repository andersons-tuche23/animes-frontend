import { useQuery } from "@tanstack/react-query";

import { getAllCategories } from "@/shared/services";

export function useGetCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
