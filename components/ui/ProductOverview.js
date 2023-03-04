import Variations from "./Variations";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ProductOverview = (props) => {
  const product = props.product;
  const [curVariation, setCurVariation] = useState(
    product.variations ? product.variations[0] : null
  );
  const getCurrentVariation = (variation) => {
    setCurVariation(variation);
  };
  return (
    <li className="product-overview">
      <div className="product-overview__img">
        <Link href={`/product/${product.id}`}>
          <Image src={product.image} alt="Product" width={425} height={325} />
        </Link>
      </div>

      <div className="product-overview__info">
        <Link href={`/product/${product.id}`}>
          <h3 className="product-overview__info__title heading-tertiary">
            {product.name}
          </h3>
        </Link>
        <span>${!product.sizes ? product.price : product.sizes.small}</span>
      </div>
      {product.variations && (
        <Variations
          variations={product.variations}
          curVariation={curVariation}
          variationHandler={getCurrentVariation}
        />
      )}
    </li>
  );
};

export default ProductOverview;
