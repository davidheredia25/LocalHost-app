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
    existent: false,
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
                },
                existent: false
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
            let arrayCategories = [];
            brandFound.categories.forEach(x => {
                let sub = x.types.map(el => el.name)
                let object = {
                    name: x.name[0].name, // zapatillas //zapatillas
                    subcategories: sub // ["Running", "Skate, Court" etc...]  
                }
                arrayCategories.push(object)
            })
            let finalObject = {
                name: payload,
                categories: arrayCategories
            }
            return {
                ...state,
                brandInfo: finalObject,
                existent: true
            }
        default:
            return state;
    }
}