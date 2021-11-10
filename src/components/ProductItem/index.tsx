import { ComponentItem } from "../../types";
import ButtonAdd from "./ButtonAdd";
import { ItemStyle } from "./style";

const ProductItem = ({ item }: ComponentItem) => {
  return (
    <ItemStyle key={item.id}>
      <div className="boxImage">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="valuesProducts">
        <h1>{item.name}</h1>
        <h3>{item.category}</h3>
        <p>
          {item.price.toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <ButtonAdd valueButton="Add Cart" ItemCart={item} />
      </div>
    </ItemStyle>
  );
};

export default ProductItem;
