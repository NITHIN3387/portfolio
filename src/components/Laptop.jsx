import Image from "next/image";
import React from "react";

const Laptop = ({ imgLink }) => {
  return (
    <div className="flex flex-col items-center w-fit">
      <div
        className={`grid p-[6px] h-[97.3px] w-[144px] bg-gray-700 rounded-md`}
      >
        <div className="bg-white rounded-sm">
          <Image src={imgLink} alt="laptop-view" objectFit="contain" priority />
        </div>
      </div>
      <div className="h-[7.5px] w-[169px] bg-gray-500 shadow-[inset_0_4.5px_rgb(75,85,99)] rounded-b-[50px] rounded-t-xl mt-1"></div>
    </div>
  );
};

export default Laptop;
