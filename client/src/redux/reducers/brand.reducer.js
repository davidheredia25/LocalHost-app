import { 
    GET_BRANDS,
    GET_CATEGORIES,
    GET_SUBCATEGORIES,
    SET_BRAND_NAME, 
    SET_BRAND_CATEGORIES,
    SET_BRAND_SUBCATEGORIES,
    SET_EXISTENT_BRAND,
    SET_NEW_CATEGORY,
    DELETE_BRAND_CATEGORY,
    DELETE_BRAND_SUBCATEGORY
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
            let arrayTypes = payload.map(e => e.name)
            return {
                ...state,
                subcategories: arrayTypes
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
                types: []
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
                types: [
                    ...objectFound.types, 
                    payload.type
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
            let brandSelected = state.brands.find(x => x.name === payload);
            return {
                ...state,
                brandInfo: brandSelected,
                existent: true
            }
        case SET_NEW_CATEGORY:
            let categFound = state.brandInfo.categories.find(obj => obj.name === payload.name)
            if (categFound) {
                let updatedTypes = categFound.types.concat(payload.types)
                updatedTypes = [...new Set(updatedTypes)]
                categFound.types = updatedTypes
                let array = state.brandInfo.categories.filter(obj => obj.name !== payload.name)
                return {
                    ...state, 
                    brandInfo: { 
                        ...state.brandInfo, //nos copiamos lo que habia en brandInfo 
                        categories: [...array, categFound] 
                    }
                }
            }
            return{
                ...state, 
                brandInfo:{ 
                    ...state.brandInfo, //nos copiamos lo que habia en brandInfo 
                    categories: [...state.brandInfo.categories, payload] //le modificamos el categories, como es un arreglo utilizamos el spread para copiarnos y luego se le agrega el payload que es lo que le agregamos al array
                }
            }
        case DELETE_BRAND_CATEGORY:
            let filtered = state.brandInfo.categories.filter(obj => obj.name !== payload)
            return {
                ...state,
                brandInfo: {
                    ...state.brandInfo,
                    categories: filtered
                }
            }
        case DELETE_BRAND_SUBCATEGORY:
            let catObj = state.brandInfo.categories.find(obj => obj.name === payload.category)
            let typesUpdated = [...catObj.types, payload.subcategory]
            typesUpdated = [...new Set(typesUpdated)]
            catObj = {
                ...catObj,
                types: typesUpdated
            }
            let array = state.brandInfo.categories.filter(obj => obj.name !== payload.category)
            array = [...array, catObj]
            return {
                ...state,
                categories: array
            }
        default:
            return state;
    }
}