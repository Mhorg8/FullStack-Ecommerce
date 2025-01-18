"use client";
import { Product } from "@/sanity.types";
import { userWhishListStore } from "@/store";
import { Heart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const AddToFavorite = ({ product }: { product: Product }) => {
  const { addItemToFavorite } = userWhishListStore();

  const handleAddToFavorite = () => {
    addItemToFavorite(product);
    toast.success(`${product.name} added to favorite`, {
      icon: Heart,
    });
  };

  return (
    <button
      onClick={handleAddToFavorite}
      className="border-2 border-darkColor/30 text-darkColor/60 px-2.5 py-1.5 rounded-md hover:text-darkColor hover:border-darkColor hoverEffect"
    >
      <Heart className="w-5 h-5" />
    </button>
  );
};

export default AddToFavorite;
