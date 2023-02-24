const ShopNavAll = () => {
  return (
    <nav>
      <ul className="shop__sidebar__list-all">
        <li className="text-primary shop__sidebar__link">
          <Link href="/shop/plants">View Plants</Link>
        </li>
        <li className="text-primary shop__sidebar__link">
          <Link href="/shop/planters">View Planters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ShopNavAll;
