"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

export function useSearch() {
  const [inputText, setInputText] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/result?view=${encodeURIComponent(inputText)}`);
    }
  };

  useEffect(() => {
    const viewParam = searchParams.get("view");

    if (viewParam?.length) {
      setInputText(decodeURIComponent(viewParam));
    }
  }, [searchParams]);

  return {
    inputText,
    handleKeyDown,
    handleInputChange,
  };
}
