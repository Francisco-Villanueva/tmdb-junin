import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setProducts,
  removeFromCart,
  addToCart,
} from "../store/productSlice";
export function useProducts() {
  const state = useSelector((s) => s.products);
  const dispatch = useDispatch();

  const setProductStore = (productList) => {
    dispatch(setProducts(productList));
  };

  const setLoadingProducts = (value) => {
    dispatch(setLoading(value));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return {
    ...state,
    setProductStore,
    setLoadingProducts,
    handleAddToCart,
    handleRemoveFromCart,
  };
}
