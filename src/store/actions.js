import axios from 'axios';

// export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const HIDE_MODAL = 'HIDE_MODAL';
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const SET_PRODUCT = 'SET_PRODUCT'
export const SET_MODAL_STATE = 'SET_MODAL_STATE';


export const hideModal = () => ({
  type: HIDE_MODAL
})

export const setModalState = (state) => ({
  type: SET_MODAL_STATE,
  isOpen: state
})

export const addProduct = (data) => ({
  type: ADD_PRODUCT,
  payload: data
}) 

export const removeProduct = (productId) => ({
  type: DELETE_PRODUCT,
  productId: productId
})

export const editProduct = (newProducts) => ({
  type: EDIT_PRODUCT,
  newProducts: newProducts
})


export const setEditProduct = (product) => ({
  type: SET_PRODUCT,
  payload: product
})

export const editProducts = (payload, id) => {
  return (dispatch) => {
    const newProducts = payload.map(product => {
      if (product.id === id) {
        return {
          id: product.id,
          name: payload.name,
          description: payload.description,
          phone: payload.phone
        }
       
      }
      return product
   })
   dispatch(editProduct(newProducts))
  }
}
// export const setProducts = (data) => ({
//   type: RECEIVE_PRODUCTS,
//   payload: data
// })

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch(getProducts());
//     try {
//       const response = await axios.get(`${BASE_API_URL}/products`);
//       dispatch(setProducts(response.data))
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// export const createProduct = (payload) => {
//   return  (dispatch) => {

//     const data = payload:image ? FormData : payload
//     dispatch(addProduct(data))
//     console.log(data);
// }
// }