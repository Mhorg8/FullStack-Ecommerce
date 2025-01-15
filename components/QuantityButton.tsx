import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import userCartStore from "@/store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
}

const QuantityButton = ({ product, className }: Props) => {
  const { addItem, getItemCount, removeItem } = userCartStore();
  const outOfStock = product.stock === 0;
  const itemCount: number = getItemCount(product._id);

  const handleRemoveItem = () => {
    removeItem(product._id);
    if (itemCount > 1) {
      toast.error(`Quantity Decreased successfully `);
    } else {
      toast.error(`${product.name} deleted from cart items`);
    }
  };

  return (
    <div className={cn("flex items-center gap-1 text-base pb-1", className)}>
      <Button
        onClick={handleRemoveItem}
        disabled={itemCount <= 0 || outOfStock}
        variant="outline"
        size="icon"
        className="w-6 h-6"
      >
        <Minus />
      </Button>
      <span className="font-semibold w-8 text-center text-darkColor">
        {itemCount}
      </span>
      <Button
        onClick={() => {
          addItem(product);
          toast.success(`${product.name} added successfully`);
        }}
        variant="outline"
        size="icon"
        className="w-6 h-6"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButton;
