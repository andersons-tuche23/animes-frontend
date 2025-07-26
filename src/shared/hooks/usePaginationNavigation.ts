"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const usePaginationNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToOffset = (offset: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("offset", offset);
    router.push(`/result?${params.toString()}`);
  };

  return { goToOffset };
};
