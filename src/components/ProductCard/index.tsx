"use client";
import Image from "next/image";
import { Product, ProductProps } from "@/app/types/product";
import { formatPrice } from "@/helpers/price";
import Button from "@/components/Common/Button";

const ProductCard = ({ product }: ProductProps) => {
  const {
    title,
    description,
    image,
    price,
    rating: { rate, count },
  } = product;

  const handleAddToCart = (productId: number) => {};

  return (
    <li className="flex flex-col gap-5 p-5">
      <div className="relative flex justify-center items-center w-full border border-[#E5E7EB] rounded-[10px] h-[285px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority
          className="object-scale-down p-2.5"
        />
      </div>

      <div className="text-sm leading-[17px] text-[#707784] font-medium">
        {product.title}
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="text-lg leading-[22px] font-medium">
          {formatPrice(price)}
        </div>
      </div>
      <Button
        variant="primary"
        label="Add to Cart"
        onClick={() => handleAddToCart(product.id)}
      />
    </li>
  );
};

export default ProductCard;
