"use client";
import PriceFormatter from "../PriceFormatter";
import CheckOutButton from "./CheckOutButton";
import Link from "next/link";
import Image from "next/image";
import userCartStore from "@/store";
import paypalLogo from "@/images/paypalLogo.png";

const MoblieCartItemSummary = () => {
  const { getTotalPrice, getSubTotalPrice } = userCartStore();

  return (
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
            <CheckOutButton />
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
  );
};

export default MoblieCartItemSummary;
