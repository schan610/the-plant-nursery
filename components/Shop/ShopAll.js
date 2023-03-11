import ProductOverview from "../ui/ProductOverview";
import ShopSection from "../ui/ShopSection";
import ShopSort from "./ShopSort";
import ShopNavAll from "./ShopNavAll";
import useFilters from "../hooks/use-filters";
import useModal from "../hooks/use-modal";
import ShopAllModal from "../mobile/ShopAllModal";
import { AnimatePresence } from "framer-motion";
import Modal from "../ui/Modal";

const ShopAll = (props) => {
  // State handles current display of products
  const { checkFilters, sortHandler, filterQuery, products } = useFilters(
    props.products
  );
  const { showModal, onShowModal, onCloseModal } = useModal();

  const updateFiltersHandler = (e) => {
    checkFilters(e);
  };
  // Handles sorting and updates display
  const updateSortHandler = (curSort) => {
    sortHandler(curSort);
  };
  return (
    <ShopSection>
      <AnimatePresence>
        {showModal && (
          <Modal show={showModal} onClose={onCloseModal}>
            <ShopAllModal
              filterQuery={filterQuery}
              filtersHandler={updateFiltersHandler}
              onClose={onCloseModal}
            />
          </Modal>
        )}
      </AnimatePresence>

      <div className="shop__heading">
        <h2 className="heading-secondary">Shop All Products</h2>
        <div className="shop__sort-mobile">
          <button
            className="btn btn--primary shop__mobile-filter"
            onClick={() => onShowModal()}
          >
            Filters
          </button>
          <ShopSort sortedHandler={updateSortHandler} />
        </div>
      </div>

      <div className="shop__main">
        <aside className="shop__sidebar shop__filter-modal">
          <nav>
            <ShopNavAll
              filterQuery={filterQuery}
              filtersHandler={updateFiltersHandler}
            />
          </nav>
        </aside>
        <div className="shop__products">
          {products.map((product) => {
            return <ProductOverview key={product.id} product={product} />;
          })}
        </div>
      </div>
    </ShopSection>
  );
};

export default ShopAll;
