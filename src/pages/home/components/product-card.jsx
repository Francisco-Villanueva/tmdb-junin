import { message } from "antd";
import { CgDetailsMore } from "react-icons/cg";

import { TbShoppingCartOff, TbShoppingCartPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";

export function ProductCard({ product }) {
  const { handleAddToCart, handleRemoveFromCart, cart } = useProducts();

  const nav = useNavigate();
  const userLogged = useSelector((state) => state.user.userLogged);

  const isOnCart = cart.products.some((p) => p.id === product.id);
  const handleCart = () => {
    if (!(userLogged && userLogged.name)) {
      return nav("/login");
    }

    if (isOnCart) {
      message.info("Producto removido del carrito!");
      handleRemoveFromCart(product.id);
      return;
    } else {
      handleAddToCart(product);
      message.success("Producto agregado al carrito!");
    }
  };
  return (
    <div className="flex flex-col w-full max-h-[300px]   gap-3  bg-slate-50 rounded  hover:bg-slate-100 transition-all duration-150  ">
      <img src={product.thumbnail} className="w-[150px] mx-auto" />

      <div className="p-2 flex flex-col gap-2 items-start   ">
        <p className="font-semibold text-sky-600 flex-grow  ">
          {product.title}
        </p>
        <div className="w-full space-y-2">
          <div className="flex justify-between w-full items-center bg-white rounded-md p-2">
            <p className=" text-sky-700 font-semibold">$ {product.price}</p>
            <span className="px-3  rounded-md bg-sky-400 text-xs font-semibold text-white ">
              {" "}
              {product.category}
            </span>
          </div>
          <div className="flex items-center gap-2 text-2xl ">
            <button onClick={handleCart}>
              {isOnCart ? (
                <TbShoppingCartOff className="text-gray-500" />
              ) : (
                <TbShoppingCartPlus className="text-gray-800" />
              )}
            </button>
            <button onClick={() => nav(`/home/products/${product.id}`)}>
              <CgDetailsMore />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
