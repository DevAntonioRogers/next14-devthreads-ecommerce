"use client";

import { useWishlistStore } from "@/store/useWishlistStore";
import Image from "next/image";
import AddToCart from "@/app/(shoppingcart)/components/ui/AddToCart";
const page = () => {
  const wishlistStore = useWishlistStore();
  return (
    <div className="py-20">
      <div className="main-container">
        {wishlistStore.wishList.length > 0 ? (
          <>
            <span className="font-bold">
              You have {wishlistStore.wishList.length} items
              in your wishlist
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default page;
