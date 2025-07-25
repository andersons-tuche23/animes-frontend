"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";

import { query } from "@/shared/lib";
import { THEME } from "@/shared/styles";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={query}>
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
