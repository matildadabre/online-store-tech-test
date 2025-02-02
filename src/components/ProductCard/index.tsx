import Image from "next/image";
import { ProductProps } from "@/app/types/product";

const ProductCard = ({ product }: ProductProps) => {
  const {
    title,
    description,
    image,
    price,
    rating: { rate, count },
  } = product;

  return (
    <li>
      <h2>{title}</h2>
      <Image src={image} alt={title} width="100" height="100" />
      <p>{description}</p>

      <p>({count})</p>

      <p>Add to Cart</p>
    </li>
  );
};

export default ProductCard;
