"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHeartCirclePlus, FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";

const ProductsCard = ({ product }) => {
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
          <button className="mx-2 bg-gray-900 border text-white p-2 rounded-md "></button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
