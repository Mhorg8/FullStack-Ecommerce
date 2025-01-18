import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
  setShowResult: (status: boolean) => void;
}

const SearchItemImage = ({ product, setShowResult }: Props) => {
  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 border border-darkColor/20 rounded-md group overflow-hidden"
      onClick={() => setShowResult(false)}
    >
      {product.images && (
        <Image
          src={urlFor(product.images[0]).url()}
          alt={product.name || ""}
          width={200}
          height={200}
          loading="eager"
          className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
        />
      )}
    </Link>
  );
};

export default SearchItemImage;
