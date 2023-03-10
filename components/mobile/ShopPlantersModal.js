import { motion, easeIn, easeOut } from "framer-motion";
import ShopNavPlanters from "../Shop/ShopNavPlanters";
const ShopPlantersModal = (props) => {
  return (
    <motion.div
      className="filter-modal"
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
        transition: {
          duration: 0.3,
          type: easeIn,
        },
      }}
      exit={{
        x: "-100%",
        transition: {
          duration: 0.3,
          type: easeOut,
        },
      }}
    >
      <ShopNavPlanters
        filterQuery={props.filterQuery}
        filtersHandler={props.filtersHandler}
      />

      <button
        className="filter-modal__close btn btn--secondary"
        onClick={props.onClose}
      >
        Close Filter
      </button>
    </motion.div>
  );
};
export default ShopPlantersModal;
