"use client";
import Image from "next/image";
import { Product, ProductProps } from "@/app/types/product";
import { formatPrice } from "@/helpers/price";
import Button from "@/components/Common/Button";
import StarRating from "@/components/StarRating";
import { useModalContext } from "@/contexts/modal/modal-context";

const ProductCard = ({ product }: ProductProps) => {
  const {
    title,
    description,
    image,
    price,
    rating: { rate, count },
  } = product;

  const { dispatch: modalDispatch } = useModalContext();

  const handleAddToCart = () => {
    modalDispatch({ type: "modal/open", payload: "cart" });
  };

  return (
    <li className="flex flex-col gap-5 pt-5 pb-5 mb-5 last:mb-0">
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
        <div className="flex items-center gap-1">
          <StarRating rate={Math.floor(rate)} /> <span>({count})</span>
        </div>
      </div>
      <Button
        variant="primary"
        label="Add to Cart"
        onClick={() => handleAddToCart()}
      >
        Add to Cart
      </Button>
    </li>
  );
};

export default ProductCard;
