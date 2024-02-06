"use client";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "../hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

// interface HeaderProps {}

const TagHader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 24px;
  }
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export function Header(/*props: HeaderProps*/) {
  const { setSearch, search } = useFilter();
  return (
    <TagHader>
      <Logo className={sairaStencil.className} href="/">
        Capputeeno
      </Logo>
      <Container>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico"
        />
        <CartControl />
      </Container>
    </TagHader>
  );
}
