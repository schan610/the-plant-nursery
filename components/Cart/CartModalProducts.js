import Image from "next/image";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CartModalProducts = (props) => {
  return (
    <li className="cart-modal__product">
      <div className="cart-modal__product__img">
        <Image
          src="https://images.unsplash.com/photo-1611588696789-9b58977ebab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt="Product Cart Image"
          width={96}
          height={120}
          quality={100}
        />
      </div>
      <div className="cart-modal__product__details">
        <div className="cart-modal__product__details__heading">
          <span>Calathea Maui Queen</span>
          <span>$142</span>
        </div>

        <span className="cart-modal__product__details__variation">
          Charcoal
        </span>

        <div className="cart-modal__product__details__quantity">
          <AiOutlineMinusCircle /> <span>1</span>
          <AiOutlinePlusCircle />
        </div>
      </div>
    </li>
  );
};

export default CartModalProducts;
