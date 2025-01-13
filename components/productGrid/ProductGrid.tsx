"use client";
import React, { useEffect, useState } from "react";
import HomeTabbar from "../HomeTabbar";
import { productTypes } from "@/constants";

import { Product } from "@/sanity.types";
import ProductList from "./ProductList";
import NoProductsAvailable from "./NoProductsAvailable";
import ProductLoading from "./ProductLoading";
import { fetchData } from "@/utils";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState<string>(
    productTypes[0]?.title || ""
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const query = `*[_type == "product" && variant ==$variant]`;

  const params = { variant: selectedTab.toLocaleLowerCase() };

  useEffect(() => {
    const res = async () => {
      const data = await fetchData(params, query, setLoading);
      setProducts(data);
    };

    res();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);
  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      {loading ? (
        <ProductLoading />
      ) : (
        <>
          {products.length ? (
            <ProductList products={products} />
          ) : (
            <NoProductsAvailable selectedTab={selectedTab} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
