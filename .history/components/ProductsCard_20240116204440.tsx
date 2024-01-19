"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHeartCirclePlus, FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";

const ProductsCard = ({ product }) => {
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
      ></select>
    </div>
  );
};

export default ProductsCard;
