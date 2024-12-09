import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";

const FeatureBottom = () => {
  return (
    <section className="text-[#2A254B] body-font">
      <div className="container px-5 py-16 mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            What makes our brand different
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex h-full bg-gray-100 p-8 flex-col items-start  sm:text-left">
            <TbTruckDelivery size={30} className="mb-4 text-[#2A254B]" />
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Next day as standard
            </h2>
            <p className="leading-relaxed text-base">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex h-full bg-gray-100 p-8 flex-col items-start  sm:text-left">
            <FaRegCheckCircle size={30} className="mb-4 text-[#2A254B]" />
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Made by true artisans
            </h2>
            <p className="leading-relaxed text-base">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex h-full bg-gray-100 p-8 flex-col items-start  sm:text-left">
            <GoCreditCard size={30} className="mb-4 text-[#2A254B]" />
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Unbeatable prices
            </h2>
            <p className="leading-relaxed text-base">
              For our materials and quality, you won’t find better prices
              anywhere.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex h-full bg-gray-100 p-8 flex-col items-start  sm:text-left">
            <LuSprout size={30} className="mb-4 text-[#2A254B]" />
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Recycled packaging
            </h2>
            <p className="leading-relaxed text-base">
              We use 100% recycled materials to ensure our footprint is more
              manageable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBottom;
