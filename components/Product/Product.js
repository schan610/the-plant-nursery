import ProductDetails from "./ProductDetails";
import Image from "next/image";
import Modal from "../ui/Modal";
import useModal from "../hooks/use-modal";
import CartModal from "../Cart/CartModal";
import { addItemToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
const Product = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const { showModal, onShowModal, onCloseModal } = useModal();

  const cartHandler = (item) => {
    onShowModal();
    const newItem = {
      ...item,
      id: `${item.id}${item.variation}${item.size}`,
    };

    dispatch(addItemToCart(newItem));
  };

  return (
    <section className="product">
      <AnimatePresence>
        {showModal && (
          <Modal show={showModal} onClose={onCloseModal}>
            <CartModal onClose={onCloseModal} />
          </Modal>
        )}
      </AnimatePresence>
      <div className="section-container product__container">
        <div className="product__img">
          <Image
            src={product.image}
            alt={product.name}
            width={710}
            height={900}
            quality={100}
            priority={true}
          />
          <span>
            Image from Unsplash thanks to &nbsp;
            <a href="https://feey.ch" target="blank">
              feey
            </a>
          </span>
        </div>
        <ProductDetails product={product} addToCart={cartHandler} />
      </div>
    </section>
  );
};

export default Product;
