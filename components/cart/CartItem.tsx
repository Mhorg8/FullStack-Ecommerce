import { Product } from "@/sanity.types";
import React from "react";
import QuantityButton from "../QuantityButton";
import PriceFormatter from "../PriceFormatter";
import userCartStore from "@/store";
import CartItemImage from "./CartItemImage";
import CartItemTextContent from "./CartItemTextContent";
import CartItemActions from "./CartItemActions";

const CartItem = ({ product }: { product: Product }) => {
  const { getItemCount } = userCartStore();

  return (
    <div
      className="border-b  p-2.5 last:border-b-0 flex items-center justify-between gap-10 h-full"
      key={product._id}
    >
      <div className="flex flex-1 items-center gap-2 h-36 md:h-44 relative">
        {/* product image */}
        <CartItemImage product={product} />

        <div className="h-full flex flex-1 items-start flex-col justify-between py-1">
          {/* product text content */}
          <CartItemTextContent product={product} />

          {/* product adding to fave or delete form cart list */}
          <CartItemActions productId={product._id} />
        </div>

        <div className="flex flex-col items-start justify-between h-36 md:h-44 p-0.5 md:p-1">
          <PriceFormatter
            amount={(product.price as number) * getItemCount(product._id)}
            className="font-bold text-lg"
          />
          <QuantityButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
