const initialState = {
    brands: [],
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
                    categories: payload
                }
            }
        case SET_BRAND_SUBCATEGORIES:
            return {
                ...state,
                brandInfo: {
                    ...state.brandInfo,
                    subcategories: payload
                }
            }
        default:
            return state;
    }
}