import {Product} from "./product";

export interface CartItem extends Product {
  size: string;
  quantity: number;
}

export interface CartContextType {
  showCart: boolean;
  cartItems: CartItem[];
  showHideCart: () => void;
}
