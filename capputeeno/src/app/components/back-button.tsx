import styled from "styled-components";
import { BackIcon } from "../components/icons/back-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  font-family: Saira;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: var(--segundary-text);
  background-color: transparent;
  cursor: pointer;
`;
interface BtnProps {
  navigate: string;
}

export function BackBtn({ navigate }: BtnProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };
  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
}
