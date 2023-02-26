import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
// This custom hook handles filtering of DATA
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

const useFilters = () => {
  const router = useRouter();

  const [filterStates, dispatch] = useReducer(filterReducer, []);

  const checkFilters = (e) => {
    !e.target.checked
      ? dispatch({ type: "REMOVE_FILTER", filter: e.target.name })
      : dispatch({ type: "ADD_FILTER", filter: e.target.name });
  };

  // Handles filterState change and pushes filters to query
  useEffect(() => {
    //  prevent error with debounce timer (too many url changes)
    const debounceTimer = setTimeout(() => {
      if (!filterStates || filterStates.length === 0) {
        router.push({});
        return;
      }
      const filterQuery = filterStates.join("&");
      router.query.features = filterQuery;
      router.push({
        query: {
          ...router.query,
        },
      });
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [filterStates]);

  // Handles any active filters on mount (refresh)
  useEffect(() => {
    if (router.isReady) {
      if (router.query?.features) {
        dispatch({
          type: "ACTIVE_FILTERS",
          filterList: router.query.features.split("&"),
        });
      }
    }
  }, [router.isReady]);

  return { checkFilters, filterStates };
};

export default useFilters;
