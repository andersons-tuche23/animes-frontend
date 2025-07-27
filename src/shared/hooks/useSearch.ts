"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export function useSearch() {
  const [inputText, setInputText] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/result?view=${encodeURIComponent(inputText)}`);
  };

  useEffect(() => {
    const viewParam = searchParams.get("view");

    if (viewParam?.length) {
      setInputText(decodeURIComponent(viewParam));
    }
  }, [searchParams]);

  return {
    inputText,
    handleSubmit,
    handleInputChange,
  };
}
