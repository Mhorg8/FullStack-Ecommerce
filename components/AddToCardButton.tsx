import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import QuantityButton from "./QuantityButton";
import PriceFormatter from "./PriceFormatter";

interface Props {
  product: Product;
  className?: string;
}
const AddToCardButton = ({ product, className }: Props) => {
  const isOutOfStock = product.stock === 0;
  const itemCount = 0;

  return (
    <div>
      {itemCount ? (
        <div className="w-full text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">
              Quantity
            </span>
            <QuantityButton product={product} />
          </div>

          {/* subtotoall */}
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product.price ? product.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          className={cn(
            `w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect`,
            className
          )}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default AddToCardButton;
