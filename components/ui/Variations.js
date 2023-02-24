import { useState } from "react";

const Variations = (props) => {
  const variations = props.variations;
  const [curVariation, setCurVariation] = useState(variations[0]);

  const variationHandler = (name) => {
    setCurVariation(name);
  };

  return (
    <div className="variations">
      <span className="variations__current">{curVariation}</span>
      <ul className="variations__list">
        {props.variations.map((name) => {
          const className = name.replaceAll(" ", "");
          return (
            <li
              key={className}
              onClick={() => variationHandler(name)}
              className={`variations__color variations__color--${className} ${
                curVariation === name && " variations__color--active"
              }`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Variations;
