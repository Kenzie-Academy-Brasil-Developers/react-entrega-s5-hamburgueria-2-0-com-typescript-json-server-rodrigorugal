import React, { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import { api } from "../../service/api";
import { ProductArray } from "../../types";
import { BodyStyle, FullScreen } from "./style";

const Home = () => {
  const [products, setProducts] = useState<ProductArray[]>([]);

  useEffect(() => {
    api
      .get("/hamburguer")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <FullScreen>
      <header>
        <h1>Burger Life</h1>

        <div>
          <input type="text" placeholder="Procura" />
        </div>
      </header>
      <BodyStyle>
        <ul>
          {products.map((item) => (
            <ProductItem item={item} />
          ))}
        </ul>
      </BodyStyle>
    </FullScreen>
  );
};

export default Home;
