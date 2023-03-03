import ProductSizes from "./ProductSizes";
import ProductFeatures from "./ProductFeatures";
import ProductQuantity from "./ProductQuantity";
import Variations from "../ui/Variations";
import { useState } from "react";

const ProductDetails = (props) => {
  const product = props.product;
  const [curQuantity, setCurQuantity] = useState(1);
  const [curSize, setCurSize] = useState(product.sizes ? "small" : null);
  const [sizePrice, setSizePrice] = useState(
    product.sizes ? product.sizes.small : null
  );
  const [curVariation, setCurVariation] = useState(
    product.variations ? product.variations[0] : null
  );

  const addQuantityHandler = () => {
    if (curQuantity >= 5) return;
    setCurQuantity((prevState) => prevState + 1);
  };
  const removeQuantityHandler = () => {
    if (curQuantity <= 1) return;
    setCurQuantity((prevState) => prevState - 1);
  };

  const sizeHandler = (curSize, price) => {
    setCurSize(curSize);
    setSizePrice(price);
  };
  const getCurrentVariation = (variation) => {
    setCurVariation(variation);
  };

  return (
    <div className="product__details">
      <div className="product__details__heading">
        <h1 className="heading-secondary">{product.name}</h1>
        <span className="text-primary">
          $ {!product.sizes ? product.price : sizePrice}
        </span>
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

        {product.sizes && (
          <ProductSizes
            sizes={product.sizes}
            curSize={curSize}
            sizeHandler={sizeHandler}
          />
        )}
        {product.variations && (
          <Variations
            variations={product.variations}
            curVariation={curVariation}
            variationHandler={getCurrentVariation}
          />
        )}
      </div>

      <div className="product__details__actions">
        <button
          onClick={() =>
            props.addToCart({
              id: product.id,
              name: product.name,
              quantity: curQuantity,
              variation: curVariation,
              price: sizePrice ? sizePrice : product.price,
              size: curSize,
            })
          }
          className="btn btn--primary"
        >
          Add to Cart
        </button>
        <ProductQuantity
          curQuantity={curQuantity}
          addQuantity={addQuantityHandler}
          removeQuantity={removeQuantityHandler}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
