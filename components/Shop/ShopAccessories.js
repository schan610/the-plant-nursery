import ProductOverview from "../ui/ProductOverview";
import ErrorMsg from "../ui/ErrorMsg";
import ShopSection from "../ui/ShopSection";
import ShopNavPlanters from "./ShopNavPlanters";
import ShopSort from "./ShopSort";
import useFilters from "../hooks/use-filters";
import { AnimatePresence } from "framer-motion";
import useModal from "../hooks/use-modal";
import ShopPlantersModal from "../mobile/ShopPlantersModal";
import Modal from "../ui/Modal";

const ShopAccessories = (props) => {
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
            <ShopPlantersModal
              filterQuery={filterQuery}
              filtersHandler={updateFiltersHandler}
              onClose={onCloseModal}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div className="shop__heading">
        <h1 className="heading-secondary">Shop Accessories</h1>
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
        <aside className="shop__sidebar shop__sidebar-modal">
          <nav>
            <ShopNavPlanters
              filterQuery={filterQuery}
              filtersHandler={updateFiltersHandler}
            />
          </nav>
        </aside>
        <div className="shop__products">
          {products.length === 0 && (
            <ErrorMsg
              message={`Couldn't find any products based on your query`}
            />
          )}
          {products.map((product) => {
            return <ProductOverview key={product.id} product={product} />;
          })}
        </div>
      </div>
    </ShopSection>
  );
};

export default ShopAccessories;
