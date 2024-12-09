import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="p-10 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl text-gray-900 md:text-3xl">
            Join the club and get the benefits
          </h2>

          <p className="text-gray-500 mt-4">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-xl">
          <form action="#" className="flex items-center ">
            {/* Email Input */}
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                placeholder="your@gmail.com"
                className="w-full rounded-md border border-gray-200 bg-white p-3 text-gray-700"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center bg-[#2A254B] px-5 py-3 text-white "
            >
              <span className="text-sm font-medium">Sign Up</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
