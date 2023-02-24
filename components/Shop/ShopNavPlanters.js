import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";

// TODO: REFACTOR FILTERING, ADD FILTERING HOOK?
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

const ShopNavPlanters = () => {
  const router = useRouter();
  const [filterStates, dispatch] = useReducer(filterReducer, []);

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

  const checkboxHandler = (e) => {
    !e.target.checked
      ? dispatch({ type: "REMOVE_FILTER", filter: e.target.name })
      : dispatch({ type: "ADD_FILTER", filter: e.target.name });
  };

  return (
    <nav>
      <ul className="shop__sidebar__list-filter">
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"planter"}
            checked={filterStates.includes("planter") ? true : false}
          />
          Planters
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"plantStand"}
            checked={filterStates.includes("plantStand") ? true : false}
          />
          Plant Stands
        </li>
      </ul>
    </nav>
  );
};
export default ShopNavPlanters;
