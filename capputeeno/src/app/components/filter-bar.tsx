"use client";
import { styled } from "styled-components";
import { FilterByTypes } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: start;
`;

export function FilterBar() {
  return (
    <ContainerFilter>
      <FilterByTypes />

      <FilterByPriority />
    </ContainerFilter>
  );
}
