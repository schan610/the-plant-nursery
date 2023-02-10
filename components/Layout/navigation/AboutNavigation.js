import Link from "next/link";

const AboutNavigation = () => {
  return (
    <div className="dropdown__container section-container ">
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">About</h2>
        <li className="dropdown__item">Our Business</li>
        <li className="dropdown__item">Visit us</li>
      </ul>
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">Learn</h2>
        <li className="dropdown__item">Care Guides</li>
        <li className="dropdown__item">Watering your Plant</li>
        <li className="dropdown__item">How to Repot </li>
      </ul>
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">Support</h2>
        <li className="dropdown__item">FAQ</li>
        <li className="dropdown__item">Order Status</li>
        <li className="dropdown__item">Policies</li>
      </ul>
    </div>
  );
};

export default AboutNavigation;
