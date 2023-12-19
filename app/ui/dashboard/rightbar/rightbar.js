import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="relative py-5 px-4 rounded-[10px] mb-5 bg-admin-soft-color">
        <div className="absolute h-1/2 w-1/2 bottom-0 right-0">
          <Image
            src="/astronaut.png"
            alt=""
            className="object-cover opacity-20"
            fill
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-bold">Available Now</div>
          <h3 className="font-medium">
            How to use the new version of admin dashboard
          </h3>
          <span className="text-[12px]">Take 4 minute to learn</span>
          <p className="text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="p-2.5 flex items-center gap-2.5 text-white border-none rounded-[5px] cursor-pointer bg-[#5d57c9] w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="relative py-5 px-0 rounded-[10px] mb-5 bg-admin-soft-color">
        <div className="absolute h-1/2 w-1/2 bottom-0 right-0">
          <Image
            src="/astronaut.png"
            alt=""
            className="object-cover opacity-20"
            fill
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-bold">Available Now</div>
          <h3 className="font-medium">
            How to use the new version of admin dashboard
          </h3>
          <span className="text-[12px]">Take 4 minute to learn</span>
          <p className="text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="p-2.5 flex items-center gap-2.5 text-white border-none rounded-[5px] cursor-pointer bg-[#5d57c9] w-max">
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
