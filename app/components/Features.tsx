import Image from "next/image";
import React from "react";

const Features = () => {
  // Constants for reusability
  const bgColor = "#2A254B";
  const textColor = "text-white";
  const maxWidth = "max-w-[630px]";

  return (
    <div className="flex flex-col sm:flex-row flex-shrink-0  p-10 gap-3 justify-center">
      <div className="w-full h-full bg-[#2A254B] text-white sm:h-[478px] sm:w-[630px] p-10 sm:p-16 flex flex-col justify-between">
        <div>
          <h2 className="font-light text-2xl sm:text-3xl mb-4">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="mt-5 mb-5 text-xs sm:text-base text-gray-700">
            <span className=" text-white">
              With our new collection, view over 400 bespoke pieces from
              homeware through to furniture today
            </span>
          </p>
        </div>
        <div className="mt-5 ">
          <button className=" w-full sm:w-fit  bg-[#F9F9F926] px-8 py-3">
            View collection
          </button>
        </div>
      </div>
      <div className="sm:h-[478px] sm:w-[630px]">
        <img
          src="/Image-Block.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Features;
