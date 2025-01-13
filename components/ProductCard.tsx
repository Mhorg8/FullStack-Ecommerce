import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceView from "./PriceView";
import AddToCardButton from "./AddToCardButton";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="group rounded-lg overflow-hidden ">
      <div className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative">
        {product?.images && (
          <Link href={`/product/${product.slug?.current}`}>
            <Image
              alt={product.name || ""}
              src={urlFor(product.images[0]).url()}
              width={500}
              height={500}
              priority
              className={`w-full h-72 object-contain overflow-hidden group-hover:scale-105 hoverEffect 
               ${product.stock === 0 ? "opacity-30" : "group-hover:scale-105"}`}
            />
          </Link>
        )}

        {product.stock === 0 && (
          <div className="absolute top-0 left-0 bg-darkColor/50 w-full h-full flex items-center justify-center">
            <p className="text-xl font-semibold text-white text-center">
              Out of Stock
            </p>
          </div>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tr-none rounded-tl-none ">
        <h2 className="font-semibold line-clamp-1">{product.name}</h2>
        <p className="text-sm text-gray-800">{product.intro}</p>
        <PriceView
          className="text-lg"
          price={product.price}
          discount={product.discount}
        />
        <AddToCardButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
