import { useCartContext } from "@/contexts/Cart/cartContext";
import { useModalContext } from "@/contexts/Modal/modalContext";

const handleClick = (isOpen: boolean, dispatch: any) => {
  if (!isOpen) {
    dispatch({ type: "modal/open", payload: "cart" });
    return;
  }
  dispatch({ type: "modal/close" });
};

const CartButton = () => {
  const { dispatch, isOpen } = useModalContext();
  const { totalQty } = useCartContext();

  return (
    <button
      type="button"
      className="flex items-center gap-2"
      onClick={() => handleClick(isOpen, dispatch)}
    >
      <img src="/bag.svg" alt="Cart" width={16} height={18} />
      {totalQty > 0 && (
        <span className="text-sm font-medium text-[#707784]">
          {" "}
          x {totalQty}
        </span>
      )}
    </button>
  );
};

export default CartButton;
