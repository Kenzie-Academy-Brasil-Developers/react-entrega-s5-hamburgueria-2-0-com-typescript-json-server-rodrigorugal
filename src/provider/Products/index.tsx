import { createContext, useState, useEffect, Children } from "react";
import { api } from "../../service/api";
import { ChildrensProdivers, ProductArray } from "../../types";

interface ValueProvider {
  products: ProductArray[];
}

export const ProductContext = createContext<ValueProvider>({} as ValueProvider);

export const ProductsProviders = ({ children }: ChildrensProdivers) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/hamburguer")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
