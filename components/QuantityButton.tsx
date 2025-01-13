import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

interface Props {
  product: Product;
  className?: string;
}

const QuantityButton = ({ product, className }: Props) => {
  const itemCount: number = 4;

  console.log(product);

  return (
    <div className={cn("flex items-center gap-1 text-base pb-1", className)}>
      <Button
        disabled={itemCount === 0 || itemCount <= 0}
        variant="outline"
        size="icon"
        className="w-6 h-6"
      >
        <Minus />
      </Button>
      <span className="font-semibold w-8 text-center text-darkColor">
        {itemCount}
      </span>
      <Button variant="outline" size="icon" className="w-6 h-6">
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButton;
