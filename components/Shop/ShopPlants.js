import ProductOverview from "../ui/ProductOverview";
import ShopNavPlants from "./ShopNavPlants";
import ShopSort from "./ShopSort";
import Modal from "../ui/Modal";
import useFilters from "../hooks/use-filters";
import useModal from "../hooks/use-modal";
import { AnimatePresence } from "framer-motion";
import ShopPlantsModal from "../mobile/ShopPlantsModal";
const ShopPlants = (props) => {
  const { checkFilters, sortHandler, filterQuery, products } = useFilters(
    props.products
  );
  const { showModal, onShowModal, onCloseModal } = useModal();
  // State handles current display of products
  const updateFiltersHandler = (e) => {
    checkFilters(e);
  };
  // Handles sorting and updates display
  const updateSortHandler = (curSort) => {
    sortHandler(curSort);
  };

  return (
    <section className="shop">
      <AnimatePresence>
        {showModal && (
          <Modal show={showModal} onClose={onCloseModal}>
            <ShopPlantsModal
              filterQuery={filterQuery}
              filtersHandler={updateFiltersHandler}
              onClose={onCloseModal}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div className="shop__container section-container">
        <div className="shop__heading">
          <h1 className="heading-secondary">Shop Plants</h1>
        </div>
        <button
          className="btn btn--primary shop__mobile-filter"
          onClick={() => onShowModal()}
        >
          Filters
        </button>
        <ShopSort sortedHandler={updateSortHandler} />

        <div className="shop__main">
          <aside className="shop__sidebar">
            <nav>
              <ShopNavPlants
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
      </div>
    </section>
  );
};

export default ShopPlants;
