import React from "react";
import { ChildrensProdivers } from "../types";
import { CartProvider } from "./Cart";
import { ProductsProviders } from "./Products";
import { TokenProvider } from "./Token";

const Providers = ({ children }: ChildrensProdivers) => {
  return (
    <ProductsProviders>
      <CartProvider>
        <TokenProvider>{children}</TokenProvider>
      </CartProvider>
    </ProductsProviders>
  );
};

export default Providers;
