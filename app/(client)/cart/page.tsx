"use client";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import EmptyCart from "@/components/cart/EmptyCart";
import NotAccessToCart from "@/components/cart/NotAccessToCart";
import userCartStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const { isSignedIn } = useAuth();
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
    getGroupedItems,
  } = userCartStore();

  const user = useUser();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const cartProducts = getGroupedItems();

  return (
    <div>
      {isSignedIn ? (
        <Container>
          {cartProducts?.length ? <p>sad</p> : <EmptyCart />}
        </Container>
      ) : (
        <NotAccessToCart />
      )}
    </div>
  );
};
export default CartPage;
