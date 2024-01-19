"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import toast from "react-hot-toast";

const AddToCart = ({
  currency,
  name,
  image,
  price,
  id,
  size,
  sizeSelect,
  onClick,
}: Product & {
  onclick: () => void;
}) => {
  const { addItem } = useShoppingCart();
  const productId = `${id}=${size}`;
};
