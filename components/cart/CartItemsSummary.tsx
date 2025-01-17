"use client";
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import PriceFormatter from "../PriceFormatter";
import paypalLogo from "@/images/paypalLogo.png";
import userCartStore from "@/store";

const CartItemsSummary = () => {
  const { getTotalPrice, getSubTotalPrice } = userCartStore();

  return (
    <>
      <div className="lg:col-span-1 ">
        <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border sticky top-20">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>subtotal</span>
              <PriceFormatter amount={getSubTotalPrice()} />
            </div>

            <div className="flex justify-between items-center">
              <span>Discount</span>
              <PriceFormatter amount={getSubTotalPrice() - getTotalPrice()} />
            </div>
            <hr />

            <div className="flex items-center justify-between">
              <span>Total</span>
              <PriceFormatter
                amount={getTotalPrice()}
                className="text-lg font-bold text-black"
              />
            </div>
            <Button
              size="lg"
              className="w-full rounded-full font-semibold tracking-wide"
            >
              Proceed to Checkout
            </Button>
            <Link
              href="/"
              className="flex items-center justify-center py-2 border border-darkColor/50 rounded-full hover:border-darkColor hover:bg-darkColor hover:text-white hoverEffect"
            >
              <Image className="w-20" src={paypalLogo} alt="pay-pal logo" />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile summary */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white py-2">
        <div className="p-4 rounded-lg border mx-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>subtotal</span>
              <PriceFormatter amount={getSubTotalPrice()} />
            </div>

            <div className="flex justify-between items-center">
              <span>Discount</span>
              <PriceFormatter amount={getSubTotalPrice() - getTotalPrice()} />
            </div>
            <hr />

            <div className="flex items-center justify-between">
              <span>Total</span>
              <PriceFormatter
                amount={getTotalPrice()}
                className="text-lg font-bold text-black"
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <Button
                size="lg"
                className="w-1/2 rounded-full font-semibold tracking-wide"
              >
                Proceed to Checkout
              </Button>
              <Link
                href="/"
                className="flex items-center justify-center p-2 w-1/2 border border-darkColor/50 rounded-full hover:border-darkColor hover:bg-darkColor hover:text-white hoverEffect "
              >
                <Image className="w-20" src={paypalLogo} alt="pay-pal logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemsSummary;
