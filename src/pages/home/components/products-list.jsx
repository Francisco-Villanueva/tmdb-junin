import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../hooks";
import { getProductSearched } from "../services"; // FUNCION PARA BUSCAR PRODUCTOS EN LA API.
import { ProductCard } from "./product-card";
import { ProductFilters } from "./product-filter";
import { ComponentWithLoader, SpinnerLoader } from "../../../components";

export function ProductList() {
  const { products, loading } = useProducts(); // hook para consumir los productos desde redux

  return (
    <ComponentWithLoader loading={loading}>
      <section className="h-full space-y-6 flex flex-col gap-4 p-4 ">
        <ProductFilters />
        <div className="grid grid-cols-5  max-md:grid-cols-2  gap-4 max-h-full h-full overflow-auto  ">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </ComponentWithLoader>
  );
}
