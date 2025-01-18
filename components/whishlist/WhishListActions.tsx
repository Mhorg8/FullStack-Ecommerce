"use client";
import { Product } from "@/sanity.types";
import { userWhishListStore } from "@/store";
import { HeartCrackIcon, HeartIcon } from "lucide-react";
import toast from "react-hot-toast";
import { Tooltip, TooltipProvider } from "../ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

interface Props {
  product: Product;
}

const WhishListActions = ({ product }: Props) => {
  const { getFavoriteItems, addItemToFavorite, deleteItemFromFavorite } =
    userWhishListStore();
  const favoriteItems = getFavoriteItems();
  const isFavorite = favoriteItems.find((item) => item._id === product._id);

  const handleAddToFavorite = () => {
    addItemToFavorite(product);
    toast.success(`${product.name} added to favorite`, {
      icon: (
        <div className="bg-[#568203] p-1.5 rounded-full flex items-center justify-center mr-2">
          <HeartIcon className="w-4 h-4" />
        </div>
      ),
    });
  };

  const handleDeleteItemFromFavorite = () => {
    deleteItemFromFavorite(product._id);
    toast.success(`${product.name} deleted from favorite`, {
      icon: (
        <div className="bg-[#DC143C] p-1.5 rounded-full flex items-center justify-center mr-2">
          <HeartIcon className="w-4 h-4" />
        </div>
      ),
    });
  };

  return (
    <TooltipProvider>
      {isFavorite ? (
        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={handleDeleteItemFromFavorite}
              className="hover:scale-110 hoverEffect"
            >
              <HeartCrackIcon className="text-darkColor fill-white" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="text-sm bg-darkColor text-white font-semibold p-1 rounded-lg">
            Remove from Favorite
          </TooltipContent>
        </Tooltip>
      ) : (
        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={handleAddToFavorite}
              className="hover:scale-110 hoverEffect"
            >
              <HeartIcon className="text-red-600  fill-red-300" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="text-sm bg-darkColor text-white font-semibold p-1 rounded-lg">
            Add to Favorite
          </TooltipContent>
        </Tooltip>
      )}
    </TooltipProvider>
  );
};

export default WhishListActions;
