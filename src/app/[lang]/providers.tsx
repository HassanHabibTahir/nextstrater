"use client"
import * as React from "react";
import { useTheme } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { resolvedTheme } = useTheme();
  return <NextThemesProvider data-theme={resolvedTheme}  {...props}>{children}</NextThemesProvider>;
}