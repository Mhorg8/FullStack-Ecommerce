import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartItemImage = ({ product }: { product: Product }) => {
  if (product.images) {
    return (
      <Link
        href={`/product/${product.slug?.current}`}
        className="borer p-0.5 md:p-1 mr:-2 rounded-md overflow-hidden group "
      >
        <Image
          src={urlFor(product.images[0]).url()}
          alt={product.name || ""}
          width={500}
          height={500}
          className="w-32 md:w-40 h-32 md:h-40 group-hover:scale-110 hoverEffect cursor-pointer object-cover overflow-hidden"
          loading="lazy"
        />
      </Link>
    );
  } else {
    return (
      <div className="w-32 md:w-40 h-32 md:h-44 rounded-md bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200">
        <p className="text-sm text-center"> product not have image</p>
      </div>
    );
  }
};

export default CartItemImage;
