"use client";
import { userWhishListStore } from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const WhishlistIcon = () => {
  const { getFavoriteItems } = userWhishListStore();
  const favoriteItemLength = getFavoriteItems();

  return (
    <Link href={"/Fav"} className="group relative">
      <Heart className="h-5 w-5 group-hover:text-darkColor hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {favoriteItemLength.length}
      </span>
    </Link>
  );
};

export default WhishlistIcon;
