import { 
  ADD_PRODUCT,
  HIDE_MODAL,
  DELETE_PRODUCT, 
  EDIT_PRODUCT,
  SET_PRODUCT,
  SET_MODAL_STATE
} from './actions';

const initialState = {
  products: [],
  productsLoading: false,
  setOpen: false,
  isModalOpen: false,
  editProductId: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case HIDE_MODAL:
      return {
        ...state,
        setOpen: false
      }

      case SET_MODAL_STATE: 
    return {
      ...state,
      isModalOpen: action.isOpen,
    }

      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload]
        }

        case SET_PRODUCT:
        return {
          ...state,
          editProduct: action.payload
        }

        case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.productId)
        }

        case EDIT_PRODUCT:
        return {
          ...state,
          products: action.newProducts
        }

    default:
      return state;
  }
}