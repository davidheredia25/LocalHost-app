import { 
    GET_BRANDS,
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    SET_BRAND_NAME, 
    SET_BRAND_CATEGORIES, 
    SET_BRAND_SUBCATEGORIES 
} from "../actions/brand.actions.js";

const initialState = {
    brands: [],
    categories: [],
    subcategories: [],
    brandInfo: {
        name: "",
        categories: [],
        subcategories: [] 
    },
  };
  
export function brandReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_BRANDS:
            return {
                ...state,
                brands: payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }
        case GET_SUBCATEGORIES:
            return {
                ...state,
                subcategories: payload
            }
        case SET_BRAND_NAME: 
            return {
                ...state,
                brandInfo: {
                    ...state.brandInfo,
                    name: payload
                }
            }
        case SET_BRAND_CATEGORIES:
            return {
                ...state,
                brandInfo: {
                    ...state.brandInfo,
                    categories: [...state.brandInfo.categories, payload]
                }
            }
        case SET_BRAND_SUBCATEGORIES:
            return {
                ...state,
                brandInfo: {
                    ...state.brandInfo,
                    subcategories: [...state.brandInfo.subcategories, payload]
                }
            }
        default:
            return state;
    }
}