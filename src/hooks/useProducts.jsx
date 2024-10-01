import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
export function useProducts() {
  const state = useSelector((s) => s.products);
  const dispatch = useDispatch();

  const setProductStore = (productList) => {
    dispatch(setProducts(productList));
  };
  return { ...state, setProductStore };
}
