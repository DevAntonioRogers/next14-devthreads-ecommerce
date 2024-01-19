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
      </div>
    </div>
  );
};

export default ProductsCard;
