import { ActionTypes } from "../constants/action-types";

const initalState = {
    products:[

    ]
}

export const productReducer = (state  =initalState, {type, payload}) => {

    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products: payload};
            // break;
        default:
            return state
            // break;
    }
}

export const selectedProductReducer = (state={},{type,payload}) => {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, products: payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {...state, product: {}};
            // break;
        default:
            return state
            // break;
    }

}

const initialState = {
    searchTerm: '',
  };
  
 export const reducerfunctiom = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload,
        };
      default:
        return state;
    }
  };

