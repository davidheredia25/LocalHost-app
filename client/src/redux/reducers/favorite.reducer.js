import { 
    GET_FAVORITES,
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from "../actions/favorite.actions";
  
  const initialState = {
    favorites: []
  };
  
  export function favoriteReducer(state = initialState, { type, payload }) {
  
    switch(type) {
        case GET_FAVORITES:
          return {
            ...state,
            favorites: payload
          }
        case ADD_FAVORITE:
          return {
            ...state,
            favorites: [...state.favorites, payload]
          }
        case REMOVE_FAVORITE:
          return {
            ...state,
            favorites: state.favorites.filter(x => x._id !== payload)
          }
        default:
          return state;
    }
}