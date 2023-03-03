import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const ProductQuantity = (props) => {
  return (
    <div className="product__details__actions__quantity">
      <AiOutlineMinusCircle onClick={props.removeQuantity} />
      <span>{props.curQuantity}</span>
      <AiOutlinePlusCircle onClick={props.addQuantity} />
    </div>
  );
};

export default ProductQuantity;
