import { styled } from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { PriorityType } from "../types/priority-type";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  margin-left: 10px;

  button {
    font-family: inherit;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
  }
`;
const PriorityFilter = styled.ul`
  position: absolute;
  cursor: pointer;
  width: 176px;
  top: 100%;
  right: 8px;
  padding: 12px 16px;
  border-radius: 4px;
  list-style: none;
  background-color: #fff;
  z-index: 999;

  li {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
  }
  li + li {
    margin-top: 4px;
  }

  li:hover {
    color: var(--text-dark-2);
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);

  const { setPriority } = useFilter();
  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}>
            Preço: Maior - Menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>
            Preço: Menor - Maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </Container>
  );
}
