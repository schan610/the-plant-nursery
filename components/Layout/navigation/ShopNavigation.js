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
        <Link href="/shop/plants" className="dropdown__title heading-secondary">
          Plants
        </Link>
        <li className="dropdown__item">
          <Link href="/shop/plants/pet-friendly">Pet-friendly</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/shop/plants/low-light">Low-light houseplants</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/shop/plants/low-maintenance">Low-maintenance</Link>
        </li>
        <li className="dropdown__item">
          <Link href="/">View all</Link>
        </li>
      </ul>
      <ul className="dropdown__list">
        <Link
          href="/shop/planters"
          className="dropdown__title heading-secondary"
        >
          Accessories
        </Link>
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
