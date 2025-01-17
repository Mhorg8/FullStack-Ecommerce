"use client";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Heart, Trash } from "lucide-react";
import userCartStore from "@/store";
import toast from "react-hot-toast";
import { TooltipContent } from "../ui/tooltip";

const CartItemActions = ({ productId }: { productId: string }) => {
  const { deleteCartProduct } = userCartStore();

  const handleDeleteProduct = (ID: string) => {
    deleteCartProduct(ID);
    toast.success(`product successfully deleted`);
  };

  return (
    <div className="flex items-center gap-2 text-gray-500 ">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Heart className="w-4 h-4 md:w-5 md:h-5 hover:text-green-600 hoverEffect" />
          </TooltipTrigger>
          <TooltipContent className="font-bold bg-darkColor text-white text-xs tracking-wider rounded-sm p-1">
            Add to Favorite
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Trash
              onClick={() => handleDeleteProduct(productId)}
              className="w-4 h-4 md:w-5 md:h-5 hover:text-red-600 hoverEffect"
            />
          </TooltipTrigger>
          <TooltipContent className="font-bold bg-darkColor text-white text-xs tracking-wider rounded-sm p-1">
            Delete Product
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CartItemActions;
