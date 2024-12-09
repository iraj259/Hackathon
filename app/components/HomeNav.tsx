"use client";

import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font h-[64px] flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Search Icon (Left) */}
        <div className="flex items-center">
          <CiSearch className="text-2xl cursor-pointer" />
        </div>

        {/* Logo (Center) */}
        <Link
          href="/Home"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <span className="text-xl ">Avion</span>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 ">
          <BsCart3 className="text-2xl cursor-pointer  hidden sm:block" />
          <MdOutlineAccountCircle className="text-2xl hidden sm:block cursor-pointer" />
          {/* Hamburger Menu for Small Screens */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeNav;
