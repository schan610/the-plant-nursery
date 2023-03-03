import { useState } from "react";

const ProductSizes = (props) => {
  const sizes = props.sizes;
  const productSizeHandler = (type, price) => {
    // Pass price to parent.
    setCurSize(type);
    props.handler(price);
  };
  return (
    <ul className="sizes-list">
      <li onClick={() => props.sizeHandler("small", sizes.small)}>
        <button
          className={`sizes-list__item ${
            props.curSize === "small" && "sizes-list__item--active"
          }`}
        >
          Small
        </button>
      </li>
      <li onClick={() => props.sizeHandler("medium", sizes.medium)}>
        <button
          className={`sizes-list__item ${
            props.curSize === "medium" && "sizes-list__item--active"
          }`}
        >
          Medium
        </button>
      </li>
      <li onClick={() => props.sizeHandler("large", sizes.large)}>
        <button
          className={`sizes-list__item ${
            props.curSize === "large" && "sizes-list__item--active"
          }`}
        >
          Large
        </button>
      </li>
    </ul>
  );
};
export default ProductSizes;
