import { useReducer, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { sortProducts } from "../helpers/sort";
// This custom hook returns filtered data to display as wekk a
const filterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER": {
      if (Object.keys(state).length !== 0) {
        const updatedState = [...state.features.split(" "), action.filter];
        const filterQuery = updatedState.join("&");
        return {
          features: filterQuery,
        };
      }
      return {
        features: action.filter,
      };
    }

    case "REMOVE_FILTER": {
      const updatedState = [...state.features.split("&")].filter(
        (name) => name !== action.filter
      );
      const filterQuery = updatedState.join("&");
      if (!filterQuery) return {};
      return {
        features: filterQuery,
      };
    }

    case "ACTIVE_FILTERS": {
      if (action.filters === undefined) return {};
      return {
        features: action.filters,
      };
    }

    default:
      return state;
  }
};

const useFilters = (allProducts) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filterQuery, dispatch] = useReducer(filterReducer, {});

  const checkFilters = (e) => {
    !e.target.checked
      ? dispatch({
          type: "REMOVE_FILTER",
          filter: e.target.name,
        })
      : dispatch({
          type: "ADD_FILTER",
          filter: e.target.name,
        });
  };

  const sortHandler = (curSort) => {
    const sortedProducts = sortProducts(products, curSort);
    setProducts(sortedProducts);
  };

  // Handles any active filters on refresh (mount)
  useEffect(() => {
    if (router.isReady) {
      dispatch({ type: "ACTIVE_FILTERS", filters: router.query.features });
    }
  }, [router.isReady, router.query.features]);

  //Handles filterState change and pushes filters to query
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (filterQuery.features !== router.query.features) {
        router.push({ query: filterQuery });
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [filterQuery, router]);

  useEffect(() => {
    // FILTER HERE
    // FILTER HOOK: checkes query
    if (router.isReady) {
      const query = router.query.features;

      if (query) {
        const toArray = query.split("&");
        const filteredItems = allProducts.filter((product) => {
          const bool = toArray.map((fitlerName) => product[fitlerName]);
          return bool.every((item) => item);
        });
        setProducts(filteredItems);
        return;
      }
      setProducts(allProducts);
    }
  }, [router.isReady, router.query, allProducts]);

  return { checkFilters, sortHandler, filterQuery, products };
};
export default useFilters;
