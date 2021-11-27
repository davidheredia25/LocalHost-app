import { 
    SET_FILTER_BRAND, 
    SET_FILTER_CATEGORY,
    SET_FILTER_SUBCATEGORY
} from "../actions/filters.actions";

const initialState = {
  brand: "",
  category: "",
  subcategory: "",
}

export function filtersReducer(state = initialState, { type, payload }) {
  switch(action.type){
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
    default:
        return state;
  }
}