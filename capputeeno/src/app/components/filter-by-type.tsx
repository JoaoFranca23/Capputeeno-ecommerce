import { styled } from "styled-components";
import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../types/filter-types";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  color: var(--text-dark);
  font-family: inherit;
  font-size: 12px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export function FilterByTypes() {
  const { type, setType } = useFilter();
  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}>
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}>
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}>
        Canecas
      </FilterItem>
    </FilterList>
  );
}
