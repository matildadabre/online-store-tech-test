import Image from "next/image";

type ProductProps = {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

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
