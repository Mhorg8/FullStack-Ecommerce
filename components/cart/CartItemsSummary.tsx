"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import PriceFormatter from "../PriceFormatter";
import paypalLogo from "@/images/paypalLogo.png";
import userCartStore from "@/store";
import CheckOutButton from "./CheckOutButton";
import MoblieCartItemSummary from "./MoblieCartItemSummary";

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
            <CheckOutButton />
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
      <MoblieCartItemSummary />
    </>
  );
};

export default CartItemsSummary;
