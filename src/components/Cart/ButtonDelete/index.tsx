import { useContext } from "react";
import { CartContext } from "../../../provider/Cart";
import { ProductArray } from "../../../types";
import { ButtomDell } from "./style";

interface Dell {
  valueText: string;
  item: ProductArray;
}
const ButtonDelete = ({ valueText, item }: Dell) => {
  const { deleteToCart } = useContext(CartContext);

  const DeleteItemCart = (valueDell: ProductArray) => {
    deleteToCart(valueDell);
  };

  return (
    <ButtomDell onClick={() => DeleteItemCart(item)}>{valueText}</ButtomDell>
  );
};

export default ButtonDelete;
