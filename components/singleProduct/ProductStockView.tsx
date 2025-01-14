import { notFound } from "next/navigation";

const ProductStockView = ({ stock }: { stock: number | undefined }) => {
  if (stock === undefined) {
    return notFound();
  }
  return (
    <p className="bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg">
      In Stock
    </p>
  );
};

export default ProductStockView;
