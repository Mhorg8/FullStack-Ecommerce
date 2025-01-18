"use server";

import stripe from "@/lib/stripe";
import { urlFor } from "@/sanity/lib/image";
import { CartItem } from "@/store";
import Stripe from "stripe";

export interface Metadata {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
}

interface CartItems {
  products: CartItem["product"];
  quantity: number;
}

export async function createCheckoutSession(
  items: CartItem[],
  metadata: Metadata
): Promise<string | null> {
  try {
    if (!items || items.length === 0) {
      throw new Error("No items provided for checkout session.");
    }

    if (!metadata.customerEmail) {
      throw new Error("Customer email is required.");
    }

    // Retrieve existing customer or create a new one
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    const customerId = customers.data.length > 0 ? customers.data[0].id : "";

    // Build session payload
    const sessionPayload: Stripe.Checkout.SessionCreateParams = {
      metadata: {
        orderNumber: metadata.orderNumber,
        customerName: metadata.customerName,
        customerEmail: metadata.customerEmail,
        clerkUserId: metadata.clerkUserId,
      },
      mode: "payment",
      allow_promotion_codes: true,
      payment_method_types: ["card"],
      invoice_creation: {
        enabled: true,
      },
      success_url: `${process.env.NEXT_PUBLIC_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
      cancel_url: `${process.env.NEXT_PUBLIC_CANCEL_URL}`,

      line_items: items.map((item) => {
        if (!item.product.price || !item.product.name) {
          throw new Error(
            `Product data is invalid for item: ${JSON.stringify(item)}`
          );
        }

        return {
          price_data: {
            currency: "USD",
            unit_amount: Math.round(item.product.price * 100),
            product_data: {
              name: item.product.name,
              description:
                item.product.description || "No description available",
              metadata: {
                id: item.product._id,
                Images:
                  item.product.images && item.product.images.length > 0
                    ? [urlFor(item.product.images[0]).url()]
                    : undefined,
              },
            },
          },
          quantity: item.quantity,
        };
      }),
    };

    // Attach customer ID or email
    if (customerId) {
      sessionPayload.customer = customerId;
    } else {
      sessionPayload.customer_email = metadata.customerEmail;
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create(sessionPayload);

    return session.url;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return null;
  }
}
