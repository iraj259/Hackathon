"use client";

import React from "react";

interface BottomBarProps {
  navItems: string[];
}

const BottomBar: React.FC<BottomBarProps> = ({ navItems }) => {
  return (
    <header className="text-[#726E8D] bg-[#F9F9F9] body-font h-[64px] w-full hidden sm:block">
      <div className="mx-auto p-5 overflow-x-auto scrollbar-hide">
        <nav className="flex gap-12 items-center text-sm justify-center whitespace-nowrap flex-nowrap">
          {navItems.map((item, index) => (
            <a key={index} href="#" className="hover:text-gray-900">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default BottomBar;
