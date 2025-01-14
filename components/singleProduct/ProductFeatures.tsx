import { BoxIcon, FileQuestion, ListOrderedIcon, Share } from "lucide-react";
import React from "react";

const ProductFeatures = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5 justify-between border-b border-gray-200 py-5 -mt-2">
        <div className="product__features">
          <BoxIcon className="w-5 h-5" />
          <p>Compare color</p>
        </div>
        <div className="product__features">
          <FileQuestion className="w-5 h-5" />
          <p>Ask a question</p>
        </div>
        <div className="product__features">
          <ListOrderedIcon className="w-5 h-5" />
          <p>Deliver & Return</p>
        </div>
        <div className="product__features">
          <Share className="w-5 h-5" />
          <p>Share</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <div className="border border-darkColor text-center p-3  hover:border-darkBlue rounded-md hoverEffect cursor-pointer  ">
          <p className="text-bae font-semibold text-darkColor">Free shipping</p>
          <p className="text-sm text-gray-500">Free shipping over order $112</p>
        </div>
        <div className="border border-darkColor text-center p-3  hover:border-darkBlue rounded-md hoverEffect cursor-pointer  ">
          <p className="text-bae font-semibold text-darkColor">
            flexiblePayment
          </p>
          <p className="text-sm text-gray-500">
            Pay with multiple created cards
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductFeatures;
