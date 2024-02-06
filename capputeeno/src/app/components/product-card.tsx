import styled from "styled-components";
import { formatPrice } from "./utils/format-price";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 256px;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  cursor: pointer;
  position: relative;

  img {
    width: 256px;
    height: 300px;
    border-radius: 8px 8px 0 0;
  }
  h3 {
    width: 232px;
    height: 24px;
    font-weight: 300;
    color: var(--text-dark-2);
    margin: 8px 0px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: (var(--shapes-dark));
  }
  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      background-color: var(--shapes);
      margin: 8px 0;
      padding: 0;
    }
  }
`;
export function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  const price = formatPrice(props.price);

  const handleNavigate = () => {
    router.push("/product?id=" + props.id);
  };
  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
}
