"use client";

import { CircleX } from "lucide-react";
import Button from "@/components/Common/Button";
import { useRef } from "react";
import CartList from "@/components/CartList";
import { useCartContext } from "@/contexts/Cart/cartContext";
import useOrderFormHandler from "@/hooks/useOrderFormHandler";
import CheckoutForm from "@/components/CheckoutForm";
import { formatPrice } from "@/helpers/price";
import { useModalContext } from "@/contexts/Modal/modalContext";

const Modal = () => {
  const { heading, dispatch: modalDispatch } = useModalContext();
  const { items, totalPrice } = useCartContext();
  const ref = useRef<HTMLFormElement>(null!);
  const { formState, action } = useOrderFormHandler(ref);

  const handleClose = () => {
    modalDispatch({ type: "modal/close" });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("modal-overlay")) {
      handleClose();
    }
  };

  const renderInnerContent = (heading: string) => {
    switch (heading) {
      case "cart":
        return <CartList />;
      case "checkout":
        return (
          <>
            <CheckoutForm errors={formState.errors} />
            <CartList />
          </>
        );
      default:
        return (
          <p className="text-[32px] pt-4 font-medium text-center">
            Thank you for your order!
          </p>
        );
    }
  };

  const getButtonProps = (heading: string) => {
    switch (heading) {
      case "cart":
        return {
          text: "Checkout",
          onClick: () =>
            modalDispatch({ type: "modal/open", payload: "checkout" }),
          disabled: items.length === 0,
        };
      case "checkout":
        return {
          text: "Confirm Order",
          onClick: () =>
            modalDispatch({
              type: "modal/open",
              payload: "order confirmation",
            }),
          disabled: items.length === 0,
        };
      default:
        return {
          text: "Close",
          onClick: handleClose,
          disabled: false,
        };
    }
  };

  const {
    text: buttonText,
    onClick: handleBtnClick,
    disabled,
  } = getButtonProps(heading || "");

  return (
    <section
      className="fixed inset-0 bg-black bg-opacity-15 flex justify-center items-center z-50 modal-overlay"
      onClick={handleOverlayClick}
    >
      <form ref={ref} action={action}>
        <div className="bg-white rounded-md p-6 w-[98%] max-w-[500px] max-h-[75vh] mt-36 overflow-y-auto">
          <div className="flex justify-between items-center pb-2 border-b">
            <h2 className="text-2xl capitalize">{heading}</h2>
            <button type="button" onClick={handleClose}>
              <CircleX className="w-8 h-8 text-gray-500 hover:text-black transition duration-100" />
            </button>
          </div>
          <div className="py-4">{renderInnerContent(heading || "")}</div>
          {(heading === "checkout" && (
            <>
              <h3 className="text-lg font-bold text-center mb-4">
                Order Summary: {formatPrice(totalPrice)}
              </h3>
              {formState.errors.form && (
                <p className="text-center text-red-500 mb-4">
                  {formState.errors.form}
                </p>
              )}
              <Button disabled={disabled}>{buttonText}</Button>
            </>
          )) || (
            <Button
              variant={buttonText !== "Close" ? "secondary" : undefined}
              disabled={disabled}
              onClick={handleBtnClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Modal;
