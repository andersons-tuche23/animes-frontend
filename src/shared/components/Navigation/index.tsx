"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { getOffsetFromUrl } from "@/shared/utils";

import { Wrapper } from "./styles";
import { NavigationProps } from "./types";
import { usePaginationNavigation } from "@/shared/hooks";

export const Navigation = ({ links }: NavigationProps) => {
  const { goToOffset } = usePaginationNavigation();

  const handleNextPage = () => {
    if (links?.next) {
      const offset = getOffsetFromUrl(links.next);
      goToOffset(offset);
    }
  };

  const handlePrevPage = () => {
    if (links?.prev) {
      const offset = getOffsetFromUrl(links.prev);
      goToOffset(offset);
    }
  };

  const prevOffsetRaw = links?.prev ? getOffsetFromUrl(links.prev) : undefined;

  const prevOffset =
    prevOffsetRaw !== undefined ? Number(prevOffsetRaw) : undefined;

  return (
    <Wrapper>
      <button
        onClick={handlePrevPage}
        disabled={!links?.prev || prevOffset === 0}
      >
        <ArrowLeft size={20} />
      </button>
      <button onClick={handleNextPage} disabled={!links?.next}>
        <ArrowRight size={20} />
      </button>
    </Wrapper>
  );
};
