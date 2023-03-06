import { useReducer } from "react";
const dropdownReducer = (state, action) => {
  if (action.type === "openShop") {
    return {
      shopDropdown: true,
      aboutDropdown: false,
    };
  }
  if (action.type === "openAbout") {
    return {
      shopDropdown: false,
      aboutDropdown: true,
    };
  }
  if (action.type === "closeAll") {
    return {
      shopDropdown: false,
      aboutDropdown: false,
    };
  }
  return state;
};
const useDropdown = (showModal) => {
  const [dropdownState, dispatch] = useReducer(dropdownReducer, {
    shopDropdown: false,
    aboutDropdown: false,
  });

  const openDropdown = (openDropdown) => {
    if (showModal) return;
    dispatch({ type: openDropdown });
  };

  const closeDropdown = () => {
    if (showModal) return;
    dispatch({ type: "closeAll" });
  };

  return {
    dropdownState,
    openDropdown,
    closeDropdown,
  };
};

export default useDropdown;
