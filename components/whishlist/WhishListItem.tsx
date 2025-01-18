import { Product } from "@/sanity.types";
import React from "react";
import CartItemImage from "../cart/CartItemImage";
import CartItemTextContent from "../cart/CartItemTextContent";
import PriceFormatter from "../PriceFormatter";
import WhishListActions from "./WhishListActions";

interface Props {
  product: Product;
}

const WhishListItem = ({ product }: Props) => {
  return (
    <div
      key={product._id}
      className="flex flex-1 items-center gap-2 h-36 md:h-44 relative border-b border-b-darkColor last:border-b-0 px-4 py-2 "
    >
      {/* product image */}
      <CartItemImage product={product} />

      <div className="h-full flex flex-1 items-start flex-col justify-between py-1">
        {/* product text content */}
        <CartItemTextContent product={product} />
        <WhishListActions product={product} />
      </div>

      <div className="flex flex-col items-start justify-between h-36 md:h-44 p-0.5 md:p-1">
        <PriceFormatter
          amount={product.price as number}
          className="font-bold text-lg"
        />
      </div>
    </div>
  );
};

export default WhishListItem;
