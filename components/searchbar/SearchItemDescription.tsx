import Link from "next/link";
import React from "react";
import PriceView from "../PriceView";
import { Product } from "@/sanity.types";

interface Props {
    product: Product;
    setShowResult: (status: boolean) => void;
  }

const SearchItemDescription = ({ product, setShowResult }: Props) => {
  return (
    <div className="px-4 py-2 flex-1">
      <Link
        href={`/product/${product.slug?.current}`}
        onClick={() => setShowResult(false)}
      >
        <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-1">{product.intro}</p>
      </Link>

      <PriceView
        price={product.price}
        discount={product.discount}
        className="md:text-lg"
      />
    </div>
  );
};

export default SearchItemDescription;
