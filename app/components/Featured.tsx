import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="bg-[#F9F9F9]  w-full md:h-[603px] mt-20 mb-14 flex flex-col md:flex-wrap md:flex-row ">
      <img
        src="/Image.png"
        alt=""
        className="h-full object-cover w-full md:w-[50%]"
      />
      <div className=" bg-[#F9F9F9] w-full h-full md:w-[50%] md:p-20 p-10 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl w-[80%] md:w-full">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </h2>
          <p className="mt-4">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market. <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>
        <div>
          <button className="bg-white mt-8 text-[#2A254B] px-8 py-4 w-full md:w-auto ">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
