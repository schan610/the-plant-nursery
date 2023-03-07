import CartModalProducts from "./CartModalProducts";
import { useSelector } from "react-redux";
import { motion, easeIn, easeOut } from "framer-motion";
import { MdClose } from "react-icons/md";

const CartModal = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <motion.div
      className="cart-modal"
      initial={{ x: "100%" }}
      animate={{
        x: 0,
        transition: {
          duration: 0.3,
          type: easeIn,
        },
      }}
      exit={{
        x: "100%",
        transition: {
          duration: 0.3,
          type: easeOut,
        },
      }}
    >
      <div className="cart-modal__heading">
        <h2 className="heading-secondary">Your Cart</h2>
        <span onClick={props.onClose}>
          <MdClose />
        </span>
      </div>
      {cart.items.length !== 0 && (
        <>
          <ul className="cart-modal__products-list">
            {cart.items.map((item) => (
              <CartModalProducts
                key={`${item.id}${item.variation}${item.size}`}
                id={item.id}
                name={item.name}
                image={item.image}
                variation={item.variation}
                size={item.size}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))}
          </ul>
          <div className="cart-modal__price">
            <div className="cart-modal__price__shipping">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="cart-modal__price__total">
              <span>Total</span>
              <span>${cart.totalPrice}</span>
            </div>
          </div>
          <div className="cart-modal__actions">
            <button className="btn btn--secondary" onClick={props.onClose}>
              Continue Shopping
            </button>
            <button className="btn btn--primary">Checkout</button>
          </div>
        </>
      )}

      {cart.items.length === 0 && (
        <div className="cart-modal__empty">
          <p>Your shopping cart is empty</p>
          <button className="btn btn--primary" onClick={props.onClose}>
            Continue Shopping
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default CartModal;
