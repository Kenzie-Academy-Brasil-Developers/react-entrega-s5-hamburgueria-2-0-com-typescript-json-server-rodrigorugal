import { useContext } from "react";
import { CartContext } from "../../provider/Cart";
import ProductCart from "./ProductCart";
import { BoxCart, FooterCart, HeaderCart } from "./style";

interface CartProps {
  showCart: boolean;
  setShowCart: (itemprop: boolean) => void;
}

const Cart = ({ showCart, setShowCart }: CartProps) => {
  const { cart } = useContext(CartContext);

  const offCart = () => {
    setShowCart(!showCart);
  };

  return (
    <BoxCart>
      <HeaderCart>
        <h3> Carrinho </h3>
        <button onClick={offCart}>X</button>
      </HeaderCart>

      <div className="boxItens">
        <ul>
          {cart.map((item) => (
            <ProductCart item={item} />
          ))}
        </ul>
      </div>

      <FooterCart>
        <h3>Valor total</h3>
        <button>Remover tudo</button>
      </FooterCart>
    </BoxCart>
  );
};

export default Cart;
