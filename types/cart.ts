import {Product} from "./product";

export interface CartItemType extends Product {
  size: string;
  quantity: number;
}

export interface CartContextType {
  showCart: boolean;
  cartItems: CartItemType[];
  showHideCart: () => void;
}
