import { useContext } from "react";
import { CartContext } from "../../../provider/Cart";
import { ProductArray } from "../../../types";
import { ButtonStyle } from "./style";

interface ButtonValues {
  valueButton: string;
  ItemCart: ProductArray;
}
const ButtonAdd = ({ valueButton, ItemCart }: ButtonValues) => {
  const { cart, addToCart } = useContext(CartContext);

  console.log(cart);

  return (
    <ButtonStyle onClick={() => addToCart(ItemCart)}>{valueButton}</ButtonStyle>
  );
};

export default ButtonAdd;
