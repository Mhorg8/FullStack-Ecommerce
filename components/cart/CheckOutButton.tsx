"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Metadata } from "@/actions/createCheckoutSession";
import { useUser } from "@clerk/nextjs";
import userCartStore from "@/store";
import { createCheckoutSession } from "@/actions/createCheckoutSession";

const CheckOutButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const { getGroupedItems } = userCartStore();
  const cartProducts = getGroupedItems();

  const handleCheckOut = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "UnKnown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };

      const checkOutUrl = await createCheckoutSession(cartProducts, metadata);

      if (checkOutUrl) {
        window.location.href = checkOutUrl;
      }
    } catch (error) {
      console.error("Error creating from checkout", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckOut}
      size="lg"
      className="w-full rounded-full font-semibold tracking-wide"
    >
      {loading ? (
        <Loader2 className="animate-spin w-5 h-5 text-green-600" />
      ) : (
        "Proceed to Checkout"
      )}
    </Button>
  );
};

export default CheckOutButton;
