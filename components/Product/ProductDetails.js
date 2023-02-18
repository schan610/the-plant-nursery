import ProductFeatures from "./ProductFeatures";
import Variations from "../ui/Variations";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
const ProductDetails = (props) => {
  const product = props.product;
  const [curQuantity, setCurQuantity] = useState(1);

  const addQuantityHandler = () => {
    if (curQuantity >= 5) return;
    setCurQuantity((prevState) => prevState + 1);
  };
  const removeQuantityHandler = () => {
    if (curQuantity <= 1) return;
    setCurQuantity((prevState) => prevState - 1);
  };

  return (
    <section className="product">
      <div className="section-container product__container">
        <div className="product__img">
          <img src={product.image} alt={product.name} />
          <span>
            Image from Unsplash thanks to &nbsp;
            <a href="https://feey.ch" target="blank">
              feey
            </a>
          </span>
        </div>

        <div className="product__details">
          <div className="product__details__heading">
            <h1 className="heading-secondary">{product.name}</h1>
            <span className="text-primary">${product.price}</span>
          </div>
          <div className="product__details__description">
            <p>{product.description}</p>
          </div>

          <div className="product__details__features">
            {product.type === "plant" && (
              <ProductFeatures
                petFriendly={product.petFriendly}
                lowMaintenance={product.lowMaintenance}
                lowLight={product.lowLight}
              />
            )}
            {product.variations && (
              <Variations variations={product.variations} />
            )}
          </div>

          <div className="product__details__actions">
            <button className="btn btn--primary">Add to Cart</button>
            <div className="product__details__actions__quantity">
              <AiOutlineMinusCircle onClick={removeQuantityHandler} />{" "}
              <span>{curQuantity}</span>
              <AiOutlinePlusCircle onClick={addQuantityHandler} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
