"use client";
import { ReactNode, createContext, useState } from "react";
import { FilterType } from "../types/filter-types";
import { PriorityType } from "../types/priority-type";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityType) => {},
});

interface ProvideProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProvideProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}>
      {children}
    </FilterContext.Provider>
  );
}
