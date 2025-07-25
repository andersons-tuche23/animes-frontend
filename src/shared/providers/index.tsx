"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { THEME } from "@/shared/styles";

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
}
