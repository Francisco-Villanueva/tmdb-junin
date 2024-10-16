import React, { useState } from "react";
import { FaHeart, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUserLoggedData } from "../../../store/userSlice";
import { SearchProduct } from "./serach-product";
import { Aside } from "./aside";
import { useProducts } from "../../../hooks";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
export function Navbar() {
  const { cart } = useProducts();
  console.log({ cart });
  const userLogged = useSelector((state) => state.user.userLogged);
  const [asideStatus, setAsideStatus] = useState(false);
  const nav = useNavigate();

  const dispatch = useDispatch();
  const handleLogOut = () => {
    // limpiar localstorage, limpiar nuestro estado global y irnos a /login.
    localStorage.removeItem("accessToken");
    dispatch(clearUserLoggedData());
    nav("/login");
  };
  return (
    <nav className="flex items-center  justify-between gap-10 px-20 w-full h-20  bg-sky-600 text-white text-center ">
      <div>
        <img src="/landing.webp" className="size-20" />
      </div>
      <div className="flex items-center  flex-grow  justify-end gap-4 max-md:hidden">
        <Link to={"/home"}>Home</Link>
        <Link to={"/home/about-us"}>About Us</Link>
        <Link to={"/home/contact"}>Contact</Link>
      </div>

      <section className="flex items-center gap-4">
        <SearchProduct />
        {userLogged && userLogged.name ? (
          <div className="text-sm flex gap-4 h-full">
            <button>
              <FaHeart />
            </button>
            <button
              onClick={() => {
                setAsideStatus(true);
              }}
            >
              <FaCartShopping />
            </button>
            <button className="flex items-center text-sm">
              <FaUser />
              <span>{userLogged.name}</span>
            </button>
            <button className="flex items-center gap-1" onClick={handleLogOut}>
              <FaSignOutAlt />
              <span className="text-sm">Log out</span>
            </button>
          </div>
        ) : null}
      </section>

      <Aside asideStatus={asideStatus} setAsideStatus={setAsideStatus}>
        <section className=" text-gray-800 h-full flex flex-col justify-between p-4 ">
          <div className="space-y-4  max-h-[90%] p-2 overflow-y-auto">
            <h2>Carrito de compras</h2>
            {cart.products.map((product) => (
              <div className="flex w-full  gap-4    rounded-md p-2 shadow-md border border-gray-200/30 ">
                <img
                  src={product.thumbnail}
                  className="w-[80px] aspect-square object-cover mx-auto bg-gray-300 rounded-md"
                />

                <div className="p-2 flex flex-col  text-start text-sm justify-between items-start flex-grow ">
                  <p className="font-semibold    ">{product.title}</p>
                  <p className="font-light text-gray-400    ">
                    {product.warrantyInformation}
                  </p>
                  <p className="  font-semibold ml-auto text-green-500">
                    $ {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-10">
            <div className="flex justify-between  gap-4 items-center uppercase font-medium text-xl flex-grow ">
              <p>Total</p>
              <p>$ {cart.total}</p>
            </div>

            <button className="bg-sky-600 text-white justify-center   p-2 rounded-md drop-shadow-xl flex items-center gap-2">
              <MdOutlineShoppingCartCheckout />
              <p> Finalizar compra</p>
            </button>
          </div>
        </section>
      </Aside>
    </nav>
  );
}
