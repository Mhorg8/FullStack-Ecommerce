import { Product } from "@/sanity.types";
import React from "react";

const CartItemTextContent = ({ product }: { product: Product }) => {
  return (
    <div className="space-y-1.5">
      <h2 className="font-semibold line-clamp-1">{product.name}</h2>
      <p className="text-sm text-lightColor font-medium">{product.intro}</p>
      <p className="text-sm capitalize">
        Variant: <span className="font-semibold">{product.variant}</span>
      </p>
      <p className="text-sm capitalize">
        Status: <span className="font-semibold">{product.status}</span>
      </p>
    </div>
  );
};

export default CartItemTextContent;
