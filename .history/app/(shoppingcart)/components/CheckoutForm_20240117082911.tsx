"use client";
import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";

const CheckoutForm = ({
  clientSecret,
}: {
  clientSecret: string;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const checkoutStore = useCheckoutStore();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { clearCart, totalPrice } = useShoppingCart();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  useEffect(() => {
    async function fetchLatestOrderId() {
      try {
        const response = await fetch("/api/orderid");
        const data = await response.json();
        setOrderId(data.orderId);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLatestOrderId();
  }, []);

  return <div>CheckoutForm</div>;
};

export default CheckoutForm;
