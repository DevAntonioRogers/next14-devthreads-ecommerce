import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "@/types/ProductTypes";

type WishlistState = {
  wishList: ProductType[];
  addToWishlist: (item: ProductType) => void;
  removeFromWishlist: (item: ProductType) => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      // INITIAL VALUES
      wishList: [],
     

      // SETTING THE STATE

// Function to add an item to the wishlist
addToWishlist: (item) =>
  set((state) => {
    // Check if the item is already in the wishlist
    const existingItem = state.wishList.find((wishItem) => wishItem.id === item.id);

    if (existingItem) {
      // If the item is already in the wishlist, update its quantity to 1
      const updatedWishList = state.wishList.map((wishItem) => {
        if (wishItem.id === item.id) {
          return { ...wishItem, quantity: 1 };
        }
        return wishItem;
      });

      // Return the updated wishlist
      return { wishList: updatedWishList };
    } else {
      // If the item is not in the wishlist, add it with a quantity of 1
      return { wishList: [...state.wishList, { ...item, quantity: 1 }] };
    }
  }),

      removeFromWishlist: (item) =>
        set((state) => {
          const existingItem = state.wishList.find((wishItem) => wishItem.id === item.id);
          if (existingItem && existingItem.quantity! > 1) {
            const updatedWishList = state.wishList.map((wishItem) => {
              if (wishItem.id === item.id) {
                return { ...wishItem, quantity: wishItem.quantity! - 1 };
              }
              return wishItem;
            });
            return { wishList: updatedWishList };
          } else {
            const filteredWishList = state.wishList.filter((wishItem) => wishItem.id !== item.id);
            return { wishList: filteredWishList };
          }
        }),
    }),
    { name: "wishlist-store" }
  )
);