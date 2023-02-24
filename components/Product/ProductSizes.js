import { useState } from "react";

const ProductSizes = (props) => {
  const sizes = props.sizes;
  const [curSize, setCurSize] = useState("small");
  const productSizeHandler = (type, price) => {
    // Pass price to parent.
    setCurSize(type);
    props.handler(price);
  };
  return (
    <ul className="sizes-list">
      <li onClick={() => productSizeHandler("small", sizes.small)}>
        <button
          className={`sizes-list__item ${
            curSize === "small" && "sizes-list__item--active"
          }`}
        >
          Small
        </button>
      </li>
      <li onClick={() => productSizeHandler("medium", sizes.medium)}>
        <button
          className={`sizes-list__item ${
            curSize === "medium" && "sizes-list__item--active"
          }`}
        >
          Medium
        </button>
      </li>
      <li onClick={() => productSizeHandler("large", sizes.large)}>
        <button
          className={`sizes-list__item ${
            curSize === "large" && "sizes-list__item--active"
          }`}
        >
          Large
        </button>
      </li>
    </ul>
  );
};
export default ProductSizes;
