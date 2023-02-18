const Variations = (props) => {
  return (
    <div className="variations">
      <span className="variations__current">Charcoal</span>
      <ul className="variations__list">
        {props.variations.map((name) => {
          const className = name.replaceAll(" ", "");
          return (
            <li
              key={className}
              className={`variations__color variations__color--${className}`}
            ></li>
          );
        })}
        {/* <li className="variations__color variations__color--active variations__color--charcoal "></li>
        <li className="variations__color  variations__color--whitesmoke "></li>
        <li className="variations__color  variations__color--ashgrey "></li>
        <li className="variations__color  variations__color--calmblue "></li>
        <li className="variations__color  variations__color--honeydew "></li> */}
      </ul>
    </div>
  );
};

export default Variations;
