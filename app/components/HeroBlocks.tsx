import React from "react";
import Image from "next/image";

const HeroBlocks = () => {
  return (
    <div className="flex flex-col sm:relative h-[704px]">
      <img
        src="/home.jpg"
        alt=""
        className="object-cover sm:h-full sm:w-full  h-[304px] w-full"
      />
      <div className="w-full sm:absolute sm:left-[50%] sm:top-[50%] sm:-translate-y-[50%]  sm:h-[444px] sm:w-[630px] bg-white p-10 sm:p-16 flex flex-col justify-between">
        <div>
          <h2 className="font-light text-3xl mb-4">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="mt-5 mb-5 sm:text-base text-gray-700">
            <span className="block sm:hidden">
              With our new collection, view over 400 bespoke pieces from
              homeware through to furniture today
            </span>
            <span className="hidden sm:block">
              Shop the new Spring 2022 collection today
            </span>
          </p>
        </div>
        <div className="mt-5">
          <button className=" w-full sm:w-fit  bg-[#F9F9F9] px-8 py-3">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlocks;
