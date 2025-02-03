"use client";

import { createContext, useReducer, useContext } from "react";

import {
  ModalContextType,
  ModalProviderProps,
  ModalStateType,
} from "@/types/modalTypes";
import modalReducer, { ModalActionType } from "./modalContextReducer";

const initialState: ModalStateType = {
  heading: null,
  isOpen: false,
};

const initialStateModal: ModalStateType = {
  heading: null,
  isOpen: false,
};

const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, dispatch] = useReducer(modalReducer, initialStateModal);

  const value: ModalContextType = {
    ...state,
    dispatch,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};

export { ModalProvider, useModalContext };
