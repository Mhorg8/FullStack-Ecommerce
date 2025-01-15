"use client";
import React, { useEffect, useState } from "react";
import HomeTabbar from "../HomeTabbar";
import { productTypes } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
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
            <AnimatePresence>
              <motion.div
                className="py-10"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <ProductList products={products} />
              </motion.div>
            </AnimatePresence>
          ) : (
            <NoProductsAvailable selectedTab={selectedTab} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
