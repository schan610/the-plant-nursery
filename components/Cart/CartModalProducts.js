import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { removeItemFromCart, updateItemFromCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartModalProducts = (props) => {
  const dispatch = useDispatch();
  const removeQuantityHandler = () => {
    dispatch(removeItemFromCart(props.id));
  };
  const addQuantityHandler = () => {
    dispatch(updateItemFromCart(props.id));
  };

  return (
    <li className="cart-modal__product">
      <div className="cart-modal__product__img">
        <Image
          src={props.image}
          alt="Product Cart Image"
          width={96}
          height={120}
          quality={100}
        />
      </div>
      <div className="cart-modal__product__details">
        <div className="cart-modal__product__details__heading">
          <span>{props.name}</span>
          <span>${props.totalPrice}</span>
        </div>

        <span className="cart-modal__product__details__variation">
          {props.variation &&
            props.size &&
            `${props.size} / ${props.variation}`}
          {props.variation && !props.size && `${props.variation}`}
          {!props.variation && props.size && `${props.size}`}
        </span>

        <div className="cart-modal__product__details__quantity">
          <AiOutlineMinusCircle onClick={removeQuantityHandler} />{" "}
          <span>{props.quantity}</span>
          <AiOutlinePlusCircle onClick={addQuantityHandler} />
        </div>
      </div>
    </li>
  );
};

export default CartModalProducts;
