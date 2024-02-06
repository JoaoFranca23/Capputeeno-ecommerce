import { styled } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;
  background-color: #de3838;
  color: white;
  margin-left: -10px;
`;

const Container = styled.div`
  position: relative;

  button {
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items", []);
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/cart");
  };

  return (
    <Container>
      <button onClick={handleNavigate}>
        <CartIcon />
        {value.length && <CartCount>{value.length}</CartCount>}
      </button>
    </Container>
  );
}
