"use client";

import { FaHeartCirclePlus } from "react-icons/fa6";
import { useWishlistStore } from "@/store/useWishlistStore";
import { ProductType } from "@/types/ProductTypes";
import toast from "react-hot-toast";

const AddToWishlistButton = ({
  name,
  id,
  image,
  unit_amount,
  quantity,
}: ProductType) => {
  const wishlistStore = useWishlistStore();
  return <div>AddToWishlistButton</div>;
};

export default AddToWishlistButton;
