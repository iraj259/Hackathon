import React from "react";

const PageHeader = () => {
  return (
    <div className=" text-center py-20 flex flex-col md:flex-row justify-around items-center ">
      <p className="text-2xl md:text-3xl text-[#2A254B]">
        A brand built on the love of craftsmanship, <br /> quality and
        outstanding customer service
      </p>
      <button className="mt-6 px-8 py-3 bg-gray-100 font-medium rounded-md ">
        View our products
      </button>
    </div>
  );
};

export default PageHeader;
