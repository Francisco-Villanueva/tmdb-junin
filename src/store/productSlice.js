import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  immutableProducts: [],
  products: [],
  cart:{
    products: [],
    total: 0
  },
  loading: false
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
      state.immutableProducts = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    addProduct: (state, action) => {
      state.products.push(action.payload)
      state.immutableProducts.push(action.payload)
    },
    removeProduct: (state, action) => {
      const productId =  action.payload // id of product to remove
      state.products  = state.products.filter(product=>product.id !== productId)
      state.immutableProducts  = state.immutableProducts.filter(product=>product.id !== productId)
    },
    addToCart: (state, action) => {
      state.cart.products = [...state.cart.products, action.payload]
      state.cart.total = state.cart.total + action.payload.price
    },
    removeFromCart: (state, action) => {
      const productId =  action.payload // id of product to remove
      state.cart.products  = state.cart.products.filter(product=>product.id !== productId)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct,removeProduct,setProducts, setLoading, addToCart,removeFromCart } = productSlice.actions

export default productSlice.reducer