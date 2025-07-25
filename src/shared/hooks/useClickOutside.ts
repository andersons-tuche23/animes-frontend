"use client";

import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpen]);
}
