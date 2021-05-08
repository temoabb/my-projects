import {

  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,

  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,

} from '../constants/productConstants';


// A reducer is what actually updates our store.

// Depending what the action type is, it is going to manipulate our state, or a certain part of a state.

//  Function is going to take a state or  and returns a new copy into our store.


// We are gonna have multiple reducers to update different parts of our actual state.
// For example below this is for our 'product list': 



export const productListReducer = (state = { products: [] }, action) => {
  // pay attention that we are updating 'state = { products: [] }' only this part of a state. Not a whole state.

  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
};




export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {

    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }

};