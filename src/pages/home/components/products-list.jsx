import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../hooks";
import { getProductSearched } from "../services";
import { ProductCard } from "./product-card";
import { ProductFilters } from "./product-filter";

export function ProductList() {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { products } = useProducts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSearching(true);
        const res = await getProductSearched(searchQuery);
        setSearchedProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setSearching(false);
      }
    };

    fetchData();
  }, [searchQuery, products]);

  const list = searchQuery ? searchedProducts : products;

  return (
    <section className="h-full space-y-6 flex flex-col gap-4 p-4 ">
      <ProductFilters />
      <div className="grid grid-cols-5  max-md:grid-cols-2  gap-4 max-h-full h-full overflow-auto  ">
        {searching ? (
          <>Loading...</>
        ) : list.length === 0 ? (
          <>NO data</>
        ) : (
          list.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </div>
    </section>
  );
}
