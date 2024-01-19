"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckoutForm from "./CheckoutForm";
import { CartEntry as ICartEntry } from "use-shopping-cart/core";
import toast from "react-hot-toast";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PLUBLISHABLE_KEY as string
)


const Checkout = ({items, totalPrice}: {totalPrice: number | undefined; items: ICartEntry[]}) => {
  return (

  )
};

export default Checkout;
