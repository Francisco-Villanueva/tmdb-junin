import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
import productSlice from './productSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    products: productSlice
  },
})