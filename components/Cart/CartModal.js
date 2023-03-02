import CartModalProducts from "./CartModalProducts";
const CartModal = (props) => {
  return (
    <div className="cart-modal">
      <h2 className="heading-secondary cart-modal__heading">Your Cart</h2>
      <ul className="cart-modal__products-list">
        <CartModalProducts />
      </ul>
      <div className="cart-modal__price">
        <div className="cart-modal__price__shipping">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="cart-modal__price__total">
          <span>Total</span>
          <span>$145</span>
        </div>
      </div>

      <div className="cart-modal__actions">
        <button className="btn btn--secondary" onClick={props.onClose}>
          Continue Shopping
        </button>
        <button className="btn btn--primary">Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
