import Link from "next/link";

const ShopNavigation = () => {
  return (
    <div key="shopDropdown" className="dropdown__container section-container ">
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">
          <Link href={"/shop"}>Shop</Link>
        </h2>
        <li className="dropdown__item">Shop All</li>
      </ul>
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">Plants</h2>
        <li className="dropdown__item">Pet-friendly</li>
        <li className="dropdown__item">Low-light houseplants</li>
        <li className="dropdown__item">Low-maintenance</li>
        <li className="dropdown__item">View all</li>
      </ul>
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">Planters</h2>
        <li className="dropdown__item">Pots</li>
        <li className="dropdown__item">Plant stands</li>
        <li className="dropdown__item">View all</li>
      </ul>
    </div>
  );
};

export default ShopNavigation;
