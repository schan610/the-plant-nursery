import { GoPackage } from "react-icons/go";
import { GiPlantWatering } from "react-icons/gi";
import { TfiHeart } from "react-icons/tfi";

const Features = () => {
  return (
    <section className="features">
      <div className="features__container section-container">
        <ul className="features__list">
          <li className="features__item">
            <GoPackage />
            <h3 className="heading-tertiary">Efficient Shipping</h3>
            <p>
              Packaged carefully to ensure the plants safety to its new home
            </p>
          </li>
          <li className="features__item">
            <GiPlantWatering />
            <h3 className="heading-tertiary">Great Quality</h3>
            <p>Each plant is ensured to be of great quality before shipment</p>
          </li>
          <li className="features__item">
            <TfiHeart />
            <h3 className="heading-tertiary">Environmental Wellness</h3>
            <p> Make your home your sanctuary </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
