import { Product } from "@/types/product";
import { CartStateType, initialStateCart } from "./cartContext";

type AddItemsType = {
  type: "cart/addItems";
  payload: Product;
};
type RemoveItemType = {
  type: "cart/removeItem";
  payload: number;
};
type ClearCartType = {
  type: "cart/clear";
};
type UpdateQtyType = {
  type: "cart/updateQty";
  payload: { id: number; qty: number };
};
type UpdateTotalPriceAndQtyType = {
  type: "cart/updateTotalPriceAndQty";
  payload: { totalPrice: number; totalQty: number };
};
export type CartActionType =
  | AddItemsType
  | RemoveItemType
  | ClearCartType
  | UpdateQtyType
  | UpdateTotalPriceAndQtyType;

const cartReducer = (
  state: CartStateType,
  action: CartActionType
): CartStateType => {
  switch (action.type) {
    case "cart/addItems":
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        items: itemExists
          ? state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.items, { ...action.payload, qty: 1 }],
      };
    case "cart/removeItem":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "cart/updateQty":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case "cart/clear":
      return initialStateCart;
    case "cart/updateTotalPriceAndQty":
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
        totalQty: action.payload.totalQty,
      };
    default:
      throw new Error(`Unhandled action type in cartReducer`);
  }
};

export default cartReducer;
