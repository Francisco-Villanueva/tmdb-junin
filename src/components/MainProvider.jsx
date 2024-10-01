import React, { useEffect } from "react";
import { useProducts } from "../hooks";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../store/userSlice";
import { getUserLogged } from "../services";
import { getAllProducts } from "../pages/home/services";

export function MainProvider({ children }) {
  const { setProductStore } = useProducts();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        const userLogged = await getUserLogged(accessToken);
        dispatch(setUserLogged(userLogged.data));
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    // Tengo que hacer un efecto para solicitar la info.
    //creo la function para hacer el 'fetch' de la informacion. Recordemos, es una funcion async. usp trycatch

    const fetchData = async () => {
      try {
        const res = await getAllProducts(); // =  await axios.get('https://dummyjson.com/products')
        // console.log("Product response:  ", res); // antes de hacer algo, veo la respuesta en consola.
        const data = res.data; // Recordemos que la 'DATA' de que queremos se encutra en la propedad 'data'
        // console.log("Products data:  ", data);

        const productList = data.products; // el listado de productos se encuetnra dentro de la propiedad 'products'
        setProductStore(productList);
      } catch (error) {
        console.error("Error en la api", error);
      }
    };

    fetchData();
  }, []);

  console.log("CORRE MAIN PROVIDEER!");
  return <div>{children}</div>;
}
