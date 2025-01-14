import React from "react";

const ProductDescription = ({ description }: { description: string }) => {
  return <p className="text-sm text-gray-600 tracking-wide">{description}</p>;
};

export default ProductDescription;
