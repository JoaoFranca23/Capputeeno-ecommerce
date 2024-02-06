import { ProductInCart } from "@/app/types/product";
import styled from "styled-components";
import { formatPrice } from "../utils/format-price";
import { ChangeEvent } from "react";
import { DeleteIcon } from "../icons/delete-icon";

interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
  handleDelete(id: string): void;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-width: 100%;
  height: 210px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 24px;
  }
  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }
`;
const ItemDescription = styled.div`
  padding: 16px 24px;
  line-height: 150%;
  color: var(--text-dark-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;

  h4 {
    font-size: 20px;
    font-weight: 300;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    max-height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    color: var(--shapes-dark);
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    select {
      padding: 8px;
      border: 1.5px solid #a8a8b3;
      border-radius: 8px;
      background-color: #f3f5f6;
      color: #737380;
      font-weight: 400;
      font-size: 16px;
    }
  }
`;

export function CartItem({
  product,
  handleUpdateQuantity,
  handleDelete,
}: CartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value));
  };
  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Delete">
        <DeleteIcon />
      </button>

      <img src={product.image_url} />

      <ItemDescription>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <select value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </ItemDescription>
    </Item>
  );
}
