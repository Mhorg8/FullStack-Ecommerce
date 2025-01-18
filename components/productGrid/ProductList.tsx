import { Product } from "@/sanity.types";
import React from "react";
import ProductCard from "../ProductCard";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  w-full">
      {products.map((product) => (
        <div key={product._id} className=" h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
