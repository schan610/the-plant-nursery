import { motion, easeIn, easeOut } from "framer-motion";
const NavDropdown = (props) => {
  return (
    <motion.div
      className="dropdown"
      key="dropdown"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
          type: easeIn,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
          type: easeOut,
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};
export default NavDropdown;
