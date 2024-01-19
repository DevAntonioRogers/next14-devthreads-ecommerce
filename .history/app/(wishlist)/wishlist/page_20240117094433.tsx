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
            <div className="flex flex-wrap gap-10 max-md:justify-center">
              {wishlistStore.wishList.map((product) => (
                <div key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                  <h1 className="font-bold">
                    {product.name}
                  </h1>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default page;
