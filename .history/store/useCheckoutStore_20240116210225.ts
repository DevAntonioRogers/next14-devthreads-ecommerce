import {create} from "zustand"
import { persist } from "zustand/middleware"


export const useCheckoutStore = create()(
  persist (
    (set) => ({
      //Initial State
      paymentIntent: "",
      onCheckout: "cart",

      //Set State
      setPaymentIntent: (val) => set((set) => ({paymentIntent: val}))
      
    })
  )
)