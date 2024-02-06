"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "../context/filter-context";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}

const theme = { desktopBreakpoint: "968px", tableBreakpoint: "768px" };

export function DefaultProviders({ children }: DefaultProviderProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
