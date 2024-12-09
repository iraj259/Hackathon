import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

const Banner = () => {
  return (
    <>
      <div className="w-full relative text-white h-[41px] bg-[#2A254B] text-sm flex items-center justify-center p-3 gap-2">
        <TbTruckDelivery size={18} />
        <p className="">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      <RxCross1 className="absolute right-3"/>

      </div>
    </>
  );
};

export default Banner;
