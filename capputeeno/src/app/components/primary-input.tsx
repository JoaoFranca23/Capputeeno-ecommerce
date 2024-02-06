import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

export const PrimaryInput = styled.input`
  width: 100%;
  background-color: var(--bg-secundary);
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: var(--text-dark);
  border: none;
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const InputContainer = styled.div`
  width: 250px;
  position: relative;
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (Value: string) => void;
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}
