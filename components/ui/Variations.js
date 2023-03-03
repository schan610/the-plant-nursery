import { useState } from "react";

const Variations = (props) => {
  return (
    <div className="variations">
      <span className="variations__current">{props.curVariation}</span>
      <ul className="variations__list">
        {props.variations.map((name) => {
          const className = name.replaceAll(" ", "");
          return (
            <li
              key={className}
              onClick={() => props.variationHandler(name)}
              className={`variations__color variations__color--${className} ${
                props.curVariation === name && " variations__color--active"
              }`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Variations;
