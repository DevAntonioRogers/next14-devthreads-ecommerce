"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Check


const Checkout = () => {
  return <div>Checkout</div>;
};

export default Checkout;
