"use client";

import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font h-[64px]">
      <div className="container mx-auto flex  p-5  items-center justify-between">
        {/* Logo */}
        <Link
          href="/Home"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Avion</span>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button className="md:hidden text-2xl ">
          <GiHamburgerMenu />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:ml-auto flex-col md:flex-row items-center justify-center text-sm space-y-2 md:space-y-0 md:space-x-12`}
        >
          <Link href="/About" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/Home" className="hover:text-gray-900">
            Contact us
          </Link>
          <Link href="/Home" className="hover:text-gray-900">
            Blog
          </Link>
          <div className="flex gap-5">
            <CiSearch className="text-2xl" />
            <Link href="/ShoppingBaskets">
              <BsCart3 className="text-2xl" />
            </Link>

            <MdOutlineAccountCircle className="text-2xl" />
          </div>
        </nav>

        {/* Icons */}
      </div>
    </header>
  );
};

export default TopNav;
