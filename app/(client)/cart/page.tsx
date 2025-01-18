"use client";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import CartItemsList from "@/components/cart/CartItemsList";
import EmptyCart from "@/components/cart/EmptyCart";
import NotAccessToCart from "@/components/cart/NotAccessToCart";
import { Button } from "@/components/ui/button";
import userCartStore from "@/store";
import { useAuth } from "@clerk/nextjs";
import { ShoppingBagIcon } from "lucide-react";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import CartItemsSummary from "@/components/cart/CartItemsSummary";

const CartPage = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const { isSignedIn } = useAuth();
  const { resetCart, getGroupedItems } = userCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const cartProducts = getGroupedItems();

  const handleReset = () => {
    const confirmed = window.confirm("Are you sure to reset your cart !?");

    if (confirmed) {
      resetCart();
      toast.success("Your cart reset successfully");
    }
  };

  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {isSignedIn ? (
        <Container className="">
          {cartProducts?.length ? (
            <>
              <div className="flex items-center gap-2 py-5">
                <ShoppingBagIcon className="" />
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              </div>
              {/* products */}
              <div className="grid lg:grid-cols-3 md:gap-8">
                <div className="lg:col-span-2 rounded-lg">
                  <CartItemsList />
                  <Button
                    onClick={handleReset}
                    className="mt-5 font-semibold"
                    variant="destructive"
                  >
                    Reset Cart
                  </Button>
                </div>
                {/* summary */}
                <CartItemsSummary />
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NotAccessToCart />
      )}
    </div>
  );
};
export default CartPage;
