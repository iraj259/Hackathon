"use client";

import React, { useState } from "react";
import Image from "next/image"; // Importing Image from Next.js for image optimization

const ProductDetail = () => {
  const [amount, setAmount] = useState(1);

  // Handle the increment and decrement of the product amount
  const increment = () => setAmount(amount + 1);
  const decrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="w-full  py-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/ImageLeft.png" // Replace with actual image path or URL
            alt="The Dandy Chair"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl text-gray-900">The Dandy Chair</h1>
          <p className="text-xl text-gray-700 ml-1 mt-2 mb-4">£250</p>
          <p>Description</p>
          <p className="text-gray-600 mt-4 w-[80%]">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The Dandy Chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>

          {/* Features List */}
          <div className="mt-4">
            <ul className="list-disc pl-8 space-y-1 text-gray-600">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions */}
          <div className="mt-4">
            <h3 className="mb-5 text-gray-900">Dimensions</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Height 110cm</li>
              <li>Width 75cm</li>
              <li>Depth: 50cm</li>
            </ul>
          </div>

          {/* Amount Section */}
          <div className="mt-6 flex items-center space-x-4">
            <p className="text-1xl">Amount</p>
            <div>
              <div className="flex items-center rounded border border-gray-200 bg-[#F9F9F9]">
                <button
                  type="button"
                  onClick={decrement} // Handle decrement
                  className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                  -
                </button>

                <input
                  type="number"
                  id="Quantity"
                  value={amount} // Dynamically bind the value to the state
                  onChange={(e) =>
                    setAmount(Math.max(1, Number(e.target.value)))
                  } // Prevent invalid input (e.g., negative numbers)
                  className="bg-[#F9F9F9] h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />

                <button
                  type="button"
                  onClick={increment} // Handle increment
                  className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 py-3 px-8 bg-[#2A254B] text-white text-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
