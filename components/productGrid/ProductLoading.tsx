"use client";
import { Loader2 } from "lucide-react";

const ProductLoading = () => {
  return (
    <div className="flex items-center justify-center py-10 min-h-80 spacey-4 text-center bg-gary-100 rounded-lg w-full mt-10">
      <div className="flex space-x-2 items-center text-blue-600">
        <Loader2 className="animate-spin" />
        <span className="text-lg font-semibold">Product is Loading</span>
      </div>
    </div>
  );
};

export default ProductLoading;
