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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          checkoutStore.setCheckout("cart");

          fetch("/api/update-order-status", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderId: orderId,
              status: "payment successful",
            }),
          });
        }
        setIsLoading(false);
        router.push("/");
        checkoutStore.setPaymentIntent("");
        toast.success("Payment Successful");
      });
  };

  return <div>CheckoutForm</div>;
};

export default CheckoutForm;
