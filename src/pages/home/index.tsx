import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import ProductItem from "../../components/ProductItem";
import { api } from "../../service/api";
import { ProductArray } from "../../types";
import { BodyStyle, FullScreen } from "./style";

const Home = () => {
  const [products, setProducts] = useState<ProductArray[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    api
      .get("/hamburguer")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <FullScreen>
      <header>
        <h1>Burger Life</h1>

        <div>
          <input type="text" placeholder="Procura" />
          <h3 onClick={handleShowCart}>Cart</h3>
        </div>
      </header>
      <BodyStyle>
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}

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
