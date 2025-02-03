import { useCartContext } from "@/contexts/Cart/cartContext";
import { useModalContext } from "@/contexts/Modal/modalContext";
import CartItem from "./CartItem";
import Button from "../Common/Button";

const CartList = () => {
  const { items } = useCartContext();
  const { dispatch } = useModalContext();

  if (items.length === 0) {
    return (
      <li className="py-16 text-center flex flex-col items-center gap-4">
        <span>Your cart is empty</span>
        <Button
          onClick={() => dispatch({ type: "modal/close" })}
          variant="secondary"
        >
          Continue Shopping
        </Button>
      </li>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
