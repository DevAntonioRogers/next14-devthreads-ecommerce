import {create} from "zustand"
import { persist } from "zustand/middleware"
import { ProductType } from "@/types/ProductTypes"

type WishlistState = {
  wishlist: ProductType[]
  addToWishlist: (item: ProductType) => void
  removeFromWishlist: (item: ProductType) => void
}

export const useWishlistStore = create<WishlistState>()(
  persist (
    (set) => ({
      wishlist: [

      addToWishlist: (item) => 
      set((state) => {
        const existingItem = state.wishlist.find((wishItem) => wishItem.id === item.id)

        if (existingItem) {
          const updatedWishlist = state.wishlist.map((wishItem) => {
            if (wishItem.id === item.id) {
              return {...wishItem, quantity: 1}
            }

            return wishItem
          })

          return {wishlist: updatedWishlist}
        } else {
          return {wishlist: [...state.wishlist, {...item, quantity: 1}]}
        }
      })





      ]
    })
  )
)