import { 
    GET_BRANDS,
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    SET_BRAND_NAME, 
    SET_BRAND_CATEGORIES
} from "../actions/brand.actions.js";

const initialState = {
    brands: [],
    categories: [],
    subcategories: [],
    brandInfo: {
        name: "",
        categories: [] // [{ name: "Accesorios", subcategories: ["gorras", "relojes"] }, {}, {}, ...]
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
        case SET_BRAND_EXISTENT:
            return {
                ...state,
                brandInfo: payload
            }
        default:
            return state;
    }
}