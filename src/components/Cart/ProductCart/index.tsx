import { ComponentItem } from "../../../types";
import ButtonDelete from "../ButtonDelete";
import { ProductItemCart } from "./style";

const ProductCart = ({ item }: ComponentItem) => {
  return (
    <ProductItemCart key={item.id}>
      <img src={item.image} alt={item.name} />

      <div className="infoProd">
        <h1>{item.name}</h1>
        <h3>{item.category}</h3>
      </div>

      <div className="priceItem">
        <h2>
          {item.price.toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>

      <ButtonDelete valueText={"X"} item={item} />
    </ProductItemCart>
  );
};

export default ProductCart;
