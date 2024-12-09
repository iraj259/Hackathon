import React from "react";

const AddToCart = () => {
  return (
    <div className=" w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl text-center">Your shopping cart</h1>

      {/* Product List */}
      <div className="border-2 p-4 mt-10">
        <div className="flex items-start justify-between mt-8">
          {/* Product 1 */}
          <div className="flex">
            <img
              src="/ProductImage.png"
              alt="Graystone vase"
              className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            <div className="ml-6">
              <h1 className="text-base sm:text-lg font-medium">
                Graystone vase
              </h1>
              <p className="text-sm mt-2">
                A timeless ceramic vase with a tri-color grey glaze.
              </p>
              <p className="mt-2 text-base font-semibold">£85</p>
            </div>
          </div>
          {/* Quantity */}
          <div className="flex flex-col items-center">
            <h1 className="text-sm font-semibold hidden sm:block">Quantity</h1>
            <p className="mt-2 text-lg font-medium">1</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex items-start justify-between mt-8">
          <div className="flex">
            <img
              src="/ProductImage2.png"
              alt="Basic white vase"
              className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
            <div className="ml-6">
              <h1 className="text-base sm:text-lg font-medium">
                Basic white vase
              </h1>
              <p className="text-sm mt-2">
                Beautiful and simple, this is one for the classics.
              </p>
              <p className="mt-2 text-base font-semibold">£125</p>
            </div>
          </div>
          {/* Quantity */}
          <div className="flex flex-col items-center">
            <h1 className="text-sm font-semibold hidden sm:block">Quantity</h1>
            <p className="mt-2 text-lg font-medium">1</p>
          </div>
        </div>
      </div>

      {/* Subtotal and Checkout */}
      <div className="mt-10 text-center">
        <div className="flex justify-between">
          <p className="text-lg sm:text-xl font-medium">Subtotal</p>
          <p className="text-lg sm:text-xl font-medium">£210</p>
        </div>
        <p className="text-sm mt-4">
          Taxes and shipping are calculated at checkout
        </p>
        <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
