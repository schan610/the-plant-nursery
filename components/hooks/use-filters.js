import { useReducer, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { sortProducts } from "../helpers/sort";
// This custom hook returns filtered data to display as wekk a
const filterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER": {
      const updatedState = [...state];
      updatedState.push(action.filter);

      return updatedState;
    }

    case "REMOVE_FILTER": {
      const updatedState = [...state].filter((name) => {
        return name !== action.filter;
      });

      return updatedState;
    }
    case "ACTIVE_FILTERS": {
      const updatedState = [...action.filterList];
      return updatedState;
    }

    default:
      return state;
  }
};

const useFilters = (allProducts) => {
  const router = useRouter();
  const [filterStates, dispatch] = useReducer(filterReducer, []);
  const [products, setProducts] = useState(allProducts);
  const [activeFilters, setActiveFilters] = useState([]);

  const checkFilters = (e) => {
    !e.target.checked
      ? dispatch({ type: "REMOVE_FILTER", filter: e.target.name })
      : dispatch({ type: "ADD_FILTER", filter: e.target.name });
  };

  const sortHandler = (curSort) => {
    const sortedProducts = sortProducts(products, curSort);
    setProducts(sortedProducts);
  };

  // sets filters, pass in this handler in hook

  //Handles filterState change and pushes filters to query

  useEffect(() => {
    // FILTER HERE
    if (router.isReady) {
      // FILTER HOOK: checkes query
      const filterQuery = router.query?.features;
      if (filterQuery) {
        const toArray = filterQuery.split("&");
        setActiveFilters(toArray);
        const filteredItems = allProducts.filter((product) => {
          const bool = toArray.map((fitlerName) => product[fitlerName]);
          return bool.every((item) => item);
        });
        setProducts(filteredItems);
        return;
      }

      setActiveFilters([]);
      setProducts(allProducts);
    }
  }, [router.isReady, router.query, allProducts]);

  //Handles any active filters on mount (refresh)
  useEffect(() => {
    if (router.isReady) {
      if (router.query.features) {
        setActiveFilters(router.query.features.split("&"));
      }
    }
  }, [router.isReady, router.query]);

  return { checkFilters, sortHandler, activeFilters, products };
};
export default useFilters;
