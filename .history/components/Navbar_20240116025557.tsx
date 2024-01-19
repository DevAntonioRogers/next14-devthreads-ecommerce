"use client";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { mainLinks } from "@/constants";
import { userLinks } from "@/constants";

//icons
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { TbBracketsAngle } from "react-icons/tb";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] =
    useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  return (
    <nav>
      <div className="main-container border-b border-1 flex justify-between items-center py-2 relative">
        <Link href={"/"}>
          <div className="flex gap-1 items-center text-xl font-medium text-black">
            <h1>DEV-THREADS</h1>
            <TbBracketsAngle />
          </div>
        </Link>

        <ul className="flex gap-10 max-md:hidden">
          {mainLinks.map((link) => (
            <Link href={link.route}>
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>

        <div className="flex gap-5 text-xl [&>*]:cursor-pointer">
          <AiOutlineShoppingCart />
          <AiOutlineHeart />
          <div className="max-md:hidden"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
