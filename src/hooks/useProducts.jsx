import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setProducts } from "../store/productSlice";
export function useProducts() {
  const state = useSelector((s) => s.products);
  const dispatch = useDispatch();

  const setProductStore = (productList) => {
    dispatch(setProducts(productList));
  };

  const setLoadingProducts = (value) => {
    dispatch(setLoading(value));
  };
  return { ...state, setProductStore, setLoadingProducts };
}
