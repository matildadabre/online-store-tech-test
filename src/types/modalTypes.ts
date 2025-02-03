import { ModalActionType } from "@/contexts/Modal/modalContextReducer";

export type ModalHeadingType =
  | "cart"
  | "checkout"
  | "order confirmation"
  | null;

export type ModalStateType = {
  heading: ModalHeadingType;
  isOpen: boolean;
};

export type ModalContextType = ModalStateType & {
  dispatch: React.Dispatch<ModalActionType>;
};

export type ModalProviderProps = { children: React.ReactNode };
