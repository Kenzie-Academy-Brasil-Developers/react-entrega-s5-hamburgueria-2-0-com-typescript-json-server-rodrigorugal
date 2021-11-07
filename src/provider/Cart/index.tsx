import { createContext, useState } from "react";
import { ChildrensProdivers, ProductArray } from "../../types";

interface CartDataContext {
  cart: ProductArray[];
  addToCart: (addItem: ProductArray) => void;
  deleteToCart: (deleteItem: ProductArray) => void;
}

export const CartContext = createContext<CartDataContext>(
  {} as CartDataContext
);

export const CartProvider = ({ children }: ChildrensProdivers) => {
  const [cart, setCart] = useState<ProductArray[]>([]);

  const addToCart = (addItem: ProductArray) => {
    setCart([...cart, addItem]);
  };

  const deleteToCart = (deleteItem: ProductArray) => {
    setCart(cart.filter((item) => item.id !== deleteItem.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  );
};
