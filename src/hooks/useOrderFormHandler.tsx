import { useActionState, useEffect } from "react";
import { useModalContext } from "@/contexts/Modal/modalContext";
import { useCartContext } from "@/contexts/Cart/cartContext";
import { submitOrderAction } from "@/actions/submitOrder";
import { ErrorsType } from "@/types/errorTypes";

export type MessageType = "success" | "fail" | null;

export type FormStateType = {
  message: MessageType;
  errors: ErrorsType;
};

const useOrderFormHandler = (formElement: React.RefObject<HTMLFormElement>) => {
  const { dispatch: modalDispatch } = useModalContext();
  const { dispatch: cartDispatch } = useCartContext();

  const [formState, action] = useActionState(submitOrderAction, {
    message: null,
    errors: {},
  });

  // Reset the form and show the confirmation modal when the form is successfully submitted
  useEffect(() => {
    if (formState.message === "success" && formElement.current) {
      formElement.current.reset();
      modalDispatch({ type: "modal/open", payload: "order confirmation" });
      cartDispatch({ type: "cart/clear" });
    }
  }, [formState.message, cartDispatch, modalDispatch, formElement]);

  // Scroll to the top of the page
  useEffect(() => {
    if (Object.keys(formState.errors).length > 0 && formElement.current) {
      formElement.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [formState.errors, formElement]);

  return { formState, action };
};

export default useOrderFormHandler;
