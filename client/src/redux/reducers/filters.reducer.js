import { 
    SET_FILTER_BRAND, 
    SET_FILTER_CATEGORY,
    SET_FILTER_SUBCATEGORY,
    RESET_FILTER,
    SET_FILTER_NAME,
    RESET_ALL_FILTERS
} from "../actions/filters.actions";

const initialState = {
  brand: "",
  category: "",
  subcategory: "",
  name: "",
}

export function filtersReducer(state = initialState, { type, payload }) {
  switch(type){
    case SET_FILTER_BRAND:
        return {
            ...state,
            brand: payload
        }
    case SET_FILTER_CATEGORY:
        return {
            ...state,
            category: payload
        }
    case SET_FILTER_SUBCATEGORY:
        return {
            ...state,
            subcategory: payload
        }
    case SET_FILTER_NAME:
        return {
            ...state,
            name: payload
        }
    case RESET_FILTER:
        return {
            ...state,
            [payload]: ""
        }
    case RESET_ALL_FILTERS:
        return {
            ...state,
            brand: "",
            category: "",
            subcategory: "",
            name: ""
        }
    default:
        return state;
  }
}