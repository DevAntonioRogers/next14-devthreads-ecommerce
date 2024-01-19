"use client";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import Checkout from "./Checkout";
import Button from "@/components/ui/Button";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
  const {
    cartDetails,
    removeItem,
    totalPrice,
    decrementItem,
    incrementItem,
  } = useShoppingCart();

  const checkoutStore = useCheckoutStore();

  const items = Object.values(cartDetails ?? {});
  return (
    <div className="py-20">
      <div className="main-container">
        {checkoutStore.onCheckout === "checkout" && (
          <button
            className="text-sm font-bold mb-5"
            onClick={() =>
              checkoutStore.setCheckout("cart")
            }
          ></button>
        )}
      </div>
    </div>
  );
};

export default Cart;
