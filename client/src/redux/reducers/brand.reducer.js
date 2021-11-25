import { 
    GET_BRANDS,
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    SET_BRAND_NAME, 
    SET_BRAND_CATEGORIES,
    SET_BRAND_SUBCATEGORIES,
    SET_EXISTENT_BRAND,
} from "../actions/brand.actions.js";

const initialState = {
    brands: [],
    categories: [],
    subcategories: [],
    brandInfo: {
        name: "",
        categories: [] // [{ name: "Indumentaria", subcategories: ["remeras", "buzos"] }, {}, {}, ...]
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
            let categoryObj = {
                name: payload,
                subcategories: []
            }
            return {
                ...state,
                brandInfo: {
                    ...state.brandInfo,
                    categories: [
                        ...state.brandInfo.categories, 
                        categoryObj
                    ]
                }
            }
        case SET_BRAND_SUBCATEGORIES:
            let objectFound = state.brandInfo.categories.find(x => x.name === payload.category)
            objectFound = {
                ...objectFound, 
                subcategories: [
                    ...objectFound.subcategories, 
                    payload.subcategory
                ]
            }
            return {
                ...state,
                brandInfo: {
                    ...state.brandInfo,
                    categories: [
                        ...state.brandInfo.categories, 
                        objectFound
                    ]
                }
            }
        case SET_EXISTENT_BRAND:
            let brandFound = state.brands.find(x => x.name === payload);
            return {
                ...state,
                brandInfo: brandFound
            }
        default:
            return state;
    }
}