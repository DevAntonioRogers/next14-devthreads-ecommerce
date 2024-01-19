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
          >
            &#8592; Back to cart
          </button>
        )}
        {items.length < 1 &&
        checkoutStore.onCheckout === "cart" ? (
          <div className="h-screen flex items-center justify-center">
            <span className="text-2xl uppercase mb-20">
              Your cart is empty!
            </span>
          </div>
        ) : null}

        {checkoutStore.onCheckout === "cart" && (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex justify-center items-center overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={item.image as string}
                    alt={`image of ${item.name}`}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <div>
                        <h3>{item.name}</h3>
                        <h3 className="text-sm">
                          {item.size}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
