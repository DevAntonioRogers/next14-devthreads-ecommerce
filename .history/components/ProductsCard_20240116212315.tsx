"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHeartCirclePlus, FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import { ProductType } from "@/types/ProductTypes";
import AddToCart from "@/app/(shoppingcart)/components/ui/AddToCart";

const ProductsCard = ({
  product,
}: {
  product: ProductType;
}) => {
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <div className=" relative flex flex-col items-center">
      <div className="relative group">
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={`image of ${product.name}`}
          className="cursor-pointer"
        />
        <div className="hidden absolute top-5 items-center justify-center group-hover:flex flex-col gap-3">
          <button className="mx-2 bg-gray-900 border text-white p-2 rounded-md hover:bg-gray-900/75">
            <FaHeartCirclePlus />
          </button>
          <button className="mx-2 bg-gray-900 border text-white p-2 rounded-md hover:bg-gray-900/75">
            <FaEye />
          </button>
        </div>
      </div>
      <h3 className="font-bold tracking-wide">
        {product.name}
      </h3>
      <span>{product.unit_amount}</span>
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="my-2 p-2 border rounded-md"
      >
        <option value="">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <AddToCart />
    </div>
  );
};

export default ProductsCard;
