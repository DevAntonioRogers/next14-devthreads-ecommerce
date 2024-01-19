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

  const [user, setUser] = useState(true);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const userMenuHandler = () => {
    setOpenUserMenu(!openUserMenu);
  };
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
          <div
            className="max-md:hidden"
            onClick={userMenuHandler}
          >
            <AiOutlineUser />
          </div>
          <div
            className="md:hidden"
            onClick={mobileMenuHandler}
          >
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>
        </div>

        {/* USER MENU */}
        {openUserMenu && (
          <div className="z-10 absolute right-0 top-[40px] w-28 bg-gray-700 shadow-md rounded-md p-4 text-white max-md:hidden text-center">
            {!user ? (
              <ul>
                <Link href={"/sign-in"}>
                  <li>Log In</li>
                </Link>
                <Link href={"/sign-up"}>
                  <li>Sign Up</li>
                </Link>
              </ul>
            ) : (
              <ul>
                {userLinks.map((link) => (
                  <Link href={link.route}>
                    <li>{link.label}</li>
                  </Link>
                ))}
                <li
                  className="cursor-pointer"
                  onClick={() => signOut()}
                >
                  Sign Out
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {openMobileMenu && (
        <div className="md:hidden">
          <div className="absolute right-5 w-48 bg-gray-700 py-5 shadow-md rounded-md p-4 text-white text-center z-[99999]">
            <ul className="flex flex-col gap-5">
              {mainLinks.map((link) => (
                <Link href={link.route}>
                  <li>{link.label}</li>
                </Link>
              ))}
              {!user ? (
                <ul>
                  <Link href={"/sign-in"}>
                    <li>Log In</li>
                  </Link>
                  <Link href={"/sign-up"}>
                    <li>Sign Up</li>
                  </Link>
                </ul>
              ) : (
                <ul>
                  {userLinks.map((link) => (
                    <Link href={link.route}>
                      <li>{link.label}</li>
                    </Link>
                  ))}
                  <li
                    className="cursor-pointer"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
