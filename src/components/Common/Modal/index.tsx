"use client";

import { CircleX } from "lucide-react";
import Button from "../Button";
import { useModalContext } from "@/contexts/modal/modal-context";
import { JSX, use } from "react";

const Modal = () => {
  const { heading, dispatch } = useModalContext();

  return (
    <section className="fixed inset-0 bg-black bg-opacity-15 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 w-11/12 max-w-lg">
        <div className="flex justify-between items-center pb-2 border-b">
          <h2 className="text-2xl capitalize">{heading}</h2>
          <button
            type="button"
            onClick={() => dispatch({ type: "modal/close" })}
          >
            <CircleX className="w-8 h-8 text-gray-500 hover:text-black transition duration-100" />
          </button>
        </div>
        <Button
          variant="primary"
          onClick={() => dispatch({ type: "modal/close" })}
        >
          Cart
        </Button>
      </div>
    </section>
  );
};

export default Modal;
