import React from "react";
import AddToCardButton from "../AddToCardButton";
import { Product } from "@/sanity.types";
import WhishListActions from "../whishlist/WhishListActions";
import SearchItemDescription from "./SearchItemDescription";
import SearchItemImage from "./SearchItemImage";

interface Props {
  product: Product;
  setShowResult: (status: boolean) => void;
}

const SearchbarItem = ({ product, setShowResult }: Props) => {
  return (
    <div
      key={product._id}
      className="bg-white overflow-hidden border-b last:border-b-0"
    >
      <div className="flex items-center justify-between p-1">
        <SearchItemImage setShowResult={setShowResult} product={product} />
        {/* description */}
        <SearchItemDescription
          product={product}
          setShowResult={setShowResult}
        />

        <div className="min-w-24 flex items-center justify-center flex-2">
          <WhishListActions product={product} />
        </div>

        <div className="w-60 mt-1">
          <AddToCardButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default SearchbarItem;
