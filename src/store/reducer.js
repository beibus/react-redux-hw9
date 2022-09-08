import { 
  FETCH_PRODUCTS, 
  RECEIVE_PRODUCTS, 
  HIDE_MODAL 
} from './actions';

const initialState = {
  products: [],
  productsLoading: false,
  setOpen: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case FETCH_PRODUCTS: 
      return {
        ...state,
        productsLoading: true
      }
    case RECEIVE_PRODUCTS: 
      return {
        ...state,
        productsLoading: false,
        products: action.payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        setOpen: false
      }
    default:
      return state;
  }
}