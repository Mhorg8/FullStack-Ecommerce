"use client";
import CartItem from "./CartItem";
import userCartStore from "@/store";

const CartItemsList = () => {
  const { getGroupedItems } = userCartStore();

  const cartProducts = getGroupedItems();

  return (
    <div className="border min-h-fit bg-white rounded-md ">
      {cartProducts.map(({ product }) => (
        // product
        <CartItem product={product} key={product._id} />
      ))}
    </div>
  );
};

export default CartItemsList;
