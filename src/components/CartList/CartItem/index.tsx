"use client";

import Image from "next/image";
import { useCartContext, type CartItemType } from "@/contexts/Cart/cartContext";
import { formatPrice } from "@/helpers/price";
import { Trash2, Minus, Plus } from "lucide-react";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const { dispatch } = useCartContext();
  const { id, image, title, price, qty } = item;

  const handleRemove = () => {
    dispatch({ type: "cart/removeItem", payload: id });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    qty?: number
  ) => {
    const value = qty || e.target.value;
    if (!isNaN(+value)) {
      dispatch({
        type: "cart/updateQty",
        payload: { id, qty: +value },
      });
    }
  };

  const handleDecrement = () => {
    if (qty > 1) {
      dispatch({
        type: "cart/updateQty",
        payload: { id, qty: qty - 1 },
      });
      return;
    }
    dispatch({ type: "cart/removeItem", payload: id });
  };

  const handleIncrement = () => {
    dispatch({
      type: "cart/updateQty",
      payload: { id, qty: qty + 1 },
    });
  };

  return (
    <li className="flex items-start gap-4 border-b border-gray-200 py-5">
      <div className="relative flex flex-shrink-0 justify-center items-center border border-[#EFF0F3] rounded-[10px] w-[100px] h-[90px]">
        <Image
          className="object-scale-down p-2"
          src={item.image}
          alt={item.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col gap-5 flex-1 py-1.5">
        <div className="flex justify-between items-start gap-2">
          <div className="text-sm font-medium leading-[17px] text-[#707784]">
            {title}
          </div>
          <button type="button" onClick={handleRemove}>
            <Trash2 className="flex-shrink-0 w-5 h-5 cursor-pointer text-[#707784]" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">{formatPrice(price)}</span>

          <input
            className="text-center font-medium border border-[#D1D5DB] rounded-[10px] h-[30px] w-[65px]"
            type="text"
            value={qty}
            onChange={handleChange}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
