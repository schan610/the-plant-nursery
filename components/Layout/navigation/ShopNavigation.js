import Link from "next/link";

const ShopNavigation = () => {
  return (
    <div key="shopDropdown" className="dropdown__container section-container ">
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">
          <Link href={"/shop"}>Shop</Link>
        </h2>
        <li className="dropdown__item">
          <Link href="/shop"> Shop All</Link>
        </li>
      </ul>
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">Plants</h2>
        <li className="dropdown__item">
          <Link href="/">Pet-friendly</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/">Low-light houseplants</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/">Low-maintenance</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/">View all</Link>
        </li>
      </ul>
      <ul className="dropdown__list">
        <h2 className="dropdown__title heading-secondary">Accessories</h2>
        <li className="dropdown__item">
          <Link href="/"> Planters</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/">Plant stands</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/">View all</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopNavigation;
