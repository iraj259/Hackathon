import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const NewsletterHome = () => {
  return (
    <section className="NewsletterHome sm:h-[444px] text-white bg-[#F9F9F9] ">
      <div className="p-10 md:p-12 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl md:text-3xl">
            Join the club and get the benefits
          </h2>

          <p className="text-white text-sm p-3 mt-4">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-between mt-8 mb-8">
            <div className="flex mb-2 sm:mb-0 items-center gap-2">
              <FaCheckCircle />
              <h3>Exclusive offers</h3>
            </div>
            <div className="flex mb-2 sm:mb-0 items-center gap-2">
              <FaCheckCircle />
              <h3>Free events</h3>
            </div>
            <div className="flex mb-2 sm:mb-0 items-center gap-2">
              <FaCheckCircle />
              <h3>Large discounts</h3>
            </div>
          </div>
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
                className="w-full rounded-md border border-gray-200 bg-white p-3 px-6 "
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

export default NewsletterHome;
